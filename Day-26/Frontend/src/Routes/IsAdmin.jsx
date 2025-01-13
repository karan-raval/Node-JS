import React from 'react'
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const IsAdmin = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem("token") || "";

    console.log("Token:", isAuthenticated); 

    if (!isAuthenticated || isAuthenticated.split('.').length !== 3) {
        return <Navigate to={"/"} />;
    }

    const decoded = jwtDecode(isAuthenticated);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
        return <Navigate to={"/"} />;
    }

    if (decoded.role === 'admin') {
        return children;
    }

    return <Navigate to={"/"} />;
};

export default IsAdmin