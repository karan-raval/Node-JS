// OtpAndNewPasswordFields.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";



const OtpAndNewPasswordFields = () => {
    const [fpass, setfpass] = useState({
        newpassword: "",
        email: "",
        otp: "",
    });

    const handleChangee = (e) => {
        const { name, value } = e.target;
        setfpass({ ...fpass, [name]: value });
    };

    const handleSubmitt = (el) => {
        el.preventDefault();
        console.log("Form submission prevented.");
        axios
            .post("http://localhost:9999/resetPassword", fpass)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <form action="" onSubmit={handleSubmitt}>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={handleChangee}
                    className="input-field"
                />

                <TextField
                    required
                    margin="dense"
                    name="otp"
                    label="OTP"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChangee}
                    className="input-field"
                />
                <TextField
                    required
                    margin="dense"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={handleChangee}
                    className="input-field"
                />

<Button type="submit" variant="contained" color="primary" className="hover-button">
            Forgot Password
          </Button>
            </form>
        </>
    );
};

export default OtpAndNewPasswordFields;