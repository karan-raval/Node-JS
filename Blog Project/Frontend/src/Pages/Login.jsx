import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Popover from "./Popover";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:5010/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
  
      if (response.ok) {
        console.log("Login successful, showing toast...");
        toast.success("Login Successful");
        const result = await response.json();
        const token = result.token;
        console.log("Token:", token);
  
        localStorage.setItem("Token", token);
  
        setTimeout(() => {
          navigate("/");
        }, 4000); // Increased delay to ensure toast is visible
      } else {
        const result = await response.json();
        toast.error(result.msg || "Login Failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error during submission:", error);
    }
  };
  

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className="s-content--narrow">
        <div className="comments-wrapp">
          <div id="comments" className="row">
            <div className="col-full">
              <div className="respond">
                <h3 className="h2">Login </h3>

                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        className="full-width"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="full-width"
                        placeholder="Enter Password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
                <br />
                <br />
                <p>
                  Register Yourself ? <Link to={"/signup"}>Signup</Link>
                </p>
                <br /><br />
                <p>
                  <Popover/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
