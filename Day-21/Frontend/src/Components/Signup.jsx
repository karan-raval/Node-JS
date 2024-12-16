import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState({
    username:"",
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
      const response = await fetch(`http://localhost:8989/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();
      if (response.ok) {
        alert("User Register Successfull");
        navigate("/login");
      } else {
        console.error("Failed to add User:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handlesubmit}>
        <input type="text" placeholder="Username"  name="username"  onChange={handleChange} />
        <input type="email" placeholder="Email"  name="email" onChange={handleChange} />
        <input type="password" placeholder="Password"  name="password"  onChange={handleChange} />
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default Signup;
