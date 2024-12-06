import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../assets/css/Login.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");
  const UserCollection = collection(db, "users");
  const [d, setD] = useState([]);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
      const getData = async () => {
          try {
              let data = await getDocs(UserCollection);
              let val = data.docs.map((el) => ({
                  id: el.id,
                  ...el.data(),
              }));
              setD(val);
          } catch (error) {
              toast.error("Failed to load users", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!emailRegex.test(email)) {
          toast.error("Invalid email format. Please enter a valid email.", { autoClose: 3000 });
          return;
      }

      if (!passwordRegex.test(pass)) {
          toast.error("Password must be at least 8 characters long and include letters and numbers.", { autoClose: 3000 });
          return;
      }

      let existingUser = d.find((el) => el.email === email);

      let newUser = {
          email,
          pass,
          name,
      };

      if (existingUser) {
          toast.error("User already registered", { autoClose: 3000 });
      } else {
          try {
              await addDoc(UserCollection, newUser);
              toast.success("User Signup Successfully", { autoClose: 3000 });
              setTimeout(() => {
                  navigate("/Login");
              }, 3000); 
          } catch (error) {
              toast.error("Signup failed", { autoClose: 3000 });
          }
      }
    }
  return (
    <>
    <ToastContainer/>

     <Header />
      <div className="body">
      <div className="login-container">
        <h1>Signup</h1>
        <form id="loginForm" onSubmit={handleSubmit} >
          <div className="input-group">
            <label for="username">Username</label>
            <input type="text"  name="username" required  onChange={(e)=>setname(e.target.value)} />
          </div>
          <div className="input-group">
            <label for="username">Email</label>
            <input type="email" name="email" required  onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input type="password"  name="password" required  onChange={(e)=>setPass(e.target.value)} />
          </div>
          <button type="submit" className="button">Register</button>
        </form>
      <p>Alredy have account ? <Link to={'/login'}>Login</Link></p>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup