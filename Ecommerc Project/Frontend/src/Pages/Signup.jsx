import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [role, setRole] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    adminCode: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    if (name === "role") {
      setRole(value);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging Role
    console.log("Selected Role:", state.role);

    // Basic Validation
    if (!state.username || !state.email || !state.password || !state.role) {
      toast.error("All fields are required!");
      return;
    }

    if (state.role === "admin" && !state.adminCode) {
      toast.error("Admin Code is required for Admin role!");
      return;
    }

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
          if (state.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/"); 
          }
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
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="single-input-fields">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="single-input-fields">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </div>
                <div className="single-input-fields">
                  <label>Role</label>
                  <select
                    className="form-select"
                    name="role"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Your Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {role === "admin" && (
                  <div className="single-input-fields">
                    <label>Admin Code</label>
                    <input
                      type="text"
                      name="adminCode"
                      onChange={handleChange}
                      placeholder="Enter Admin Code"
                      required
                    />
                  </div>
                )}
              </div>
              <div className="register-footer">
                <p>
                  Already have an account? <Link to="/login">Login</Link> here
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
