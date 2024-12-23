import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Forgotpassword.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Forgotpassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const [showOtpFields, setShowOtpFields] = useState(false);

  const handleSubmit = (E) => {
    E.preventDefault();
    axios
      .post("http://localhost:9999/forgotPassword", state)
      .then((Res) => {
        console.log(Res);
        setShowOtpFields(true);
      })
      .catch((err) => {
        console.log(err);
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
          <form action="" onSubmit={handleSubmit}>
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
            
            {showOtpFields && (
              <>
                <TextField
                  required
                  margin="dense"
                  name="otp"
                  label="OTP"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="input-field"
                />
              </>
            )}
          </form>
          <br />
          <Button variant="contained" color="primary" className="hover-button">
            Forgot Password
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Forgotpassword;
