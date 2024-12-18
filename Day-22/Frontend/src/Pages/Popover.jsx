import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popover = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [state, setState] = React.useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:'',
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (E) => {
    E.preventDefault();
    axios.post("http://localhost:8888/changePassword", state)
      .then((Res) => {
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
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
            name="confirmPassword"
            label="Confrim Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
           <TextField
            required
            margin="dense"
            id="new-password"
            type="submit"
          />
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button type="submit">Change Password</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Popover;
