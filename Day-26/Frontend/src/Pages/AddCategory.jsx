import React, { useEffect, useRef } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/navbar';
import anime from 'animejs'; // Ensure anime.js is installed via npm or yarn
import '../assets/style.css';

const AddCategory = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);
  const pathRef = useRef(null);
  let current = null;

  useEffect(() => {
    if (!emailRef.current  || !submitRef.current || !pathRef.current) {
      console.error('Refs are not assigned correctly.');
      return;
    }

    const animatePath = (offsetValue, dashArrayValue) => {
      if (current) current.pause();
      current = anime({
        targets: pathRef.current,
        strokeDashoffset: {
          value: offsetValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: dashArrayValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    };

    const emailFocusHandler = () => animatePath(0, '240 1386');
    // const emailFocusHandler = () => animatePath(-336, '240 1386');
    const submitFocusHandler = () => animatePath(-730, '530 1386');

    emailRef.current.addEventListener('focus', emailFocusHandler);
    // passwordRef.current.addEventListener('focus', passwordFocusHandler);
    submitRef.current.addEventListener('focus', submitFocusHandler);

    return () => {
      // Cleanup event listeners on unmount
      if (emailRef.current) emailRef.current.removeEventListener('focus', emailFocusHandler);
      // if (passwordRef.current) passwordRef.current.removeEventListener('focus', passwordFocusHandler);
      if (submitRef.current) submitRef.current.removeEventListener('focus', submitFocusHandler);
    };
  }, []);

  return (
    <>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
              <a className="navbar-brand brand-logo-mini">
                <img
                  src="https://demo.bootstrapdash.com/corona-free/jquery/template/assets/images/logo-mini.svg"
                  alt="logo"
                />
              </a>
            </div>
            <Navbar />
          </nav>
          <div className="page">
            <div className="container">
              <div className="left">
                <div className="login">Login</div>
                <div className="eula">
                  By logging in you agree to the ridiculously long terms that
                  you didn't bother to read
                </div>
              </div>
              <div className="right">
                <svg viewBox="0 0 320 300">
                  <defs>
                    <linearGradient
                      id="linearGradient"
                      x1="13"
                      y1="193.49992"
                      x2="307"
                      y2="193.49992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop style={{ stopColor: '#ff00ff' }} offset="0" />
                      <stop style={{ stopColor: '#ff0000' }} offset="1" />
                    </linearGradient>
                  </defs>
                  <path
                    ref={pathRef}
                    d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
                  />
                </svg>
                <div className="form">
                  <label htmlFor="email">Email</label>
                  <input type="category" id="email" name='category' placeholder='Add Your Category' ref={emailRef} />
                    <br /><br /><br /><br />
                  <input
                    type="submit"
                    id="submit"
                    value="Submit"
                    ref={submitRef}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
