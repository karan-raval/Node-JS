import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
// import axios from "axios"


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
    oldpassword:"",
    newpassword:"",
    confirmpassword:'',
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("http://localhost:8888/changepassword", state)
    //   .then((Res) => {
    //     console.log(Res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetch(`http://localhost:8888/changepassword`,{
      method : "POST",
      headers : {
         "Content-Type" : "application/json"
      },
      body : JSON.stringify(state)
    })
    .then((Res)=>Res.json())
      .then((Res) => {
          console.log(Res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <>
      <p  onClick={handleClickOpen}>
        Change Your Password 
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
            Forgot PassWord
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popover;