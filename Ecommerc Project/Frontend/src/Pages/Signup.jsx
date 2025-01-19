import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGooglePlus } from "@mdi/js";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [role, setRole] = useState("");
  const [adminInput, setAdminInput] = useState("");
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    adminCode: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (name === "role") {
      setRole(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state);

    const secretKey = role === "admin" ? adminInput : undefined;

    try {
      const response = await fetch("http://localhost:5532/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while registering.");
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="login-bg">
        <div className="register-form-area">
          <div className="register-form text-center">
            <div className="register-heading">
              <span>Sign Up</span>
              <p>Create your account to get full access</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <div className="single-input-fields">
                  <label>Full name</label>
                  <input type="text" name='username' onChange={handlechange} placeholder="Enter full name" />
                </div>
                <div className="single-input-fields">
                  <label>Email Address</label>
                  <input type="email" name='email' onChange={handlechange} placeholder="Enter email address" />
                </div>
                <div className="single-input-fields">
                  <label>Password</label>
                  <input type="password" name='password' onChange={handlechange} placeholder="Enter Password" />
                </div>
                <div className="single-input-fields">
                  <label>Role</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="role"
                    onChange={handlechange}
                    required
                  >
                    <option value="">Select Your Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <br />

                {role === "admin" && (
                  <div className="single-input-fields">
                    <label>Admin Code</label>
                    <input
                      type="text"
                      className="form-control p_input"
                      name="adminCode"
                      onChange={handlechange}
                      required
                    />
                  </div>
                )}
              </div>
              <div className="register-footer">
                <p>
                  Already have an account? <a href="login.html"> Login</a> here
                </p>
                <button className="submit-btn3">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
