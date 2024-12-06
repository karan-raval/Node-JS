import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/Login.css";
// import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { toast, ToastContainer } from "react-toastify";
import { google, userdatas } from "../Redux/User/UserReducer";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((s) => s.UserReducer);
  console.log(state);
  console.log(state.isLogin);

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
        toast.error("Failed to load user data", { autoClose: 3000 });
      }
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = d.filter(
      (el) => el.email === email && el.pass === pass && el.name === username
    );
    console.log(user);
    if (user.length > 0) {
      toast.success("Login Successful!", { autoClose: 3000 });
      dispatch(userdatas)(user[0]);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Login Unsuccessful! Please check your credentials.", {
        autoClose: 3000,
      });
    }
  };

  const handleClick = () => {
    dispatch(google);
  };

  useEffect(() => {
    if (state.isLogin) {
      toast.success("Login Successful!", { autoClose: 3000 });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [state.isLogin, navigate]);

  return (
    <>
      <Header />
      <ToastContainer
        className="toast-container-custom"
        position="top-left"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
      />
      <div className="body">
        <div className="login-container">
          <h1>Login</h1>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPass(e.target.value)}
                name="password"
                required
              />
            </div>
            <button type="submit" className="button">
              Login
            </button>
          </form>
          <button
            type="button"
            onClick={handleClick}
            className="btn_1 green button full_width text-center"
          >
            Log in With Google &nbsp;&nbsp;
            <i className="fas fa-caret-right"></i>
          </button>

          <p>
            Register Your Self ? <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
