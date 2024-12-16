import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:8989/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
          });
    
          const result = await response.json();
          if (response.ok) {
            alert("User Login Successfull");
            navigate("/");
          } else {
            console.error("Failed to add User:", result.message);
          }
        } catch (error) {
          console.error("Error during submission:", error);
        }
      };
  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" onSubmit={handlesubmit} >
        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
