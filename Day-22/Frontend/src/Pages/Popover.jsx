import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';

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
          <form action="">
          <TextField
            autoFocus
            required
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            name="oldpassword"
            label="Old Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            name="newpassword"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            name="confirmPassword"
            label="Confrim Password"
            type="password"
            fullWidth
            variant="standard"
          />
           <TextField
            required
            margin="dense"
            id="new-password"
            type="submit"
            fullWidth
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
