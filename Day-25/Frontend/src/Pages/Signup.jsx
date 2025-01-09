import React, { useState } from 'react'
import Icon from "@mdi/react";
import { mdiFacebook, mdiGooglePlus } from "@mdi/js";
import {Link} from 'react-router-dom'

const Signup = () => {
  const [role, setRole] = useState('');
  const [adminInput, setAdminInput] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const secretKey = role === 'admin' ? adminInput : undefined; // Only include secretKey if role is admin

    const userData = {
      username,
      email,
      password,
      role,
      secretKey,
    };

    try {
      const response = await fetch('/api/register', { // Adjust the URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.msg); // Show success message
      } else {
        alert(result.msg); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering.'); // Show error message
    }
  };

  return (
    <>
      <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control p_input" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control p_input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control p_input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>

                  <div className="form-group">
                    <label>Role</label>
                    <select className="form-select" aria-label="Default select example" value={role} onChange={handleRoleChange} required>
                      <option value="">Select Role</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  {role === 'admin' && (
                    <div className="form-group">
                      <label>Admin Code</label>
                      <input type="text" className="form-control p_input" value={adminInput} onChange={(e) => setAdminInput(e.target.value)} required />
                    </div>
                  )}

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Register</button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-facebook me-2 col">
                      <Icon path={mdiFacebook} size={1} className="me-2" />
                      Facebook
                    </button>
                    <button className="btn btn-google col">
                      <Icon path={mdiGooglePlus} size={1} className="me-2" />
                      Google Plus
                    </button>
                  </div>
                  <p className="sign-up text-center">Already have an Account?<Link to='/'> Sign Up</Link></p>
                  <p className="terms">By creating an account you are accepting our<a href="#"> Terms & Conditions</a></p>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- row ends --> */}
      </div>
      {/* <!-- page-body-wrapper ends --> */}
    </div>
    </>
  )
}

export default Signup