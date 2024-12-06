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