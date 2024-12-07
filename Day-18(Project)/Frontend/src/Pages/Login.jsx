import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
      setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

    try {
      const response = await fetch(`http://localhost:3333/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login Successfull")
        navigate("/");
      } else {
        console.error("Failed to add movie:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };
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
      />
      <div className="body">
        <div className="login-container">
          <h1>Login</h1>
          <form id="loginForm" onSubmit={handleSubmit}>
            {/* <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                onChange={handleChange}
                name="username"
                required
              />
            </div> */}

            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                onChange={handleChange}
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
            // onClick={handleClick}
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
