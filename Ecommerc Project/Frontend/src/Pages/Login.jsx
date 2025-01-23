import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import "../assets/css/login.css";

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
      const response = await fetch("http://localhost:5532/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        const token = result.token;

        sessionStorage.setItem("token", token);

        const decoded = jwtDecode(token);

        if (decoded.role === "admin") {
          setTimeout(() => {
            navigate("/admin");
          }, 3000);
        } else {
          setTimeout(() => {
            navigate("/products");
          }, 3000);
        }
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="login-bg">
        <div className="login-form-area">
          <div className="login-form">
            <div className="login-heading">
              <span>Login</span>
              <p>Enter Login details to get access</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <div className="single-input-fields">
                  <label> Email Address</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Username / Email address"
                  />
                </div>
                <div className="single-input-fields">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="single-input-fields login-check">
                  <input type="checkbox" id="fruit1" name="keep-log" />
                  <label>Keep me logged in</label>
                  <Link to={'/forgotpassword'} className="f-right">Forgot Password?</Link>
                </div>
              </div>
              <div className="login-footer">
                <p>
                  Don’t have an account? <Link to={"/signup"}>Sign Up</Link>{" "}
                  here
                </p>
                <button type="submit" className="submit-btn3">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
