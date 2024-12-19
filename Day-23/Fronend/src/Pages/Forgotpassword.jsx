import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
// import axios from "axios"

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
    
      const handleSubmit = (E) => {
        E.preventDefault();
        axios
          .post("http://localhost:9999/forgotPassword", state)
          .then((Res) => {
            console.log(Res);
            let a = jwtDecode(Res.data.token);
            console.log(a);
            localStorage.setItem("token", Res.data.token);
            navigate('/home');
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
     <p onClick={handleClickOpen}>
        Forgot Your Password 
      </p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Change Password</DialogTitle>
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
          />
          <TextField
            required
            margin="dense"
            name="oldpassword"
            label="Old Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
          <TextField
            required
            margin="dense"
            name="newpassword"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
          <TextField
            required
            margin="dense"
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
           <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>

          
          </form>
          <br />
          <Button variant="contained" color="primary">
            Forgot Password
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Forgotpassword