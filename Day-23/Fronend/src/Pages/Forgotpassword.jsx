import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Forgotpassword.css';
import OtpAndNewPasswordFields from './Otppass';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Forgotpassword = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    email: "",
  });
  
  const [showOtpFields, setShowOtpFields] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/forgotPassword", state)
      .then((res) => {
        console.log(res);
        setShowOtpFields(true);
      })
      .catch((err) => {
        console.error("Error during API call:", err);
      });
  };

  return (
    <>
      <p onClick={handleClickOpen}>Forgot Your Password</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="dialog-animation"
      >
        <DialogTitle className="dialog-title">Forgot Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
              className="input-field"
            />

            <Button type="submit" variant="contained" color="primary" className="hover-button">
              Submit
            </Button>
            
            </form>
            {showOtpFields && (
              <OtpAndNewPasswordFields  />
            )}
          <br />
          
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Forgotpassword;
