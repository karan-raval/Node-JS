const { Router } = require("express");
const {
    getAllUsers,
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword
} = require("../Controller/UserController");

const UserRouter = Router();

// ✅ Get all users
UserRouter.get("/all", getAllUsers);

// ✅ Register user
UserRouter.post("/register", registerUser);

// ✅ Login user
UserRouter.post("/login", loginUser);

// ✅ Forgot Password (Send OTP)
UserRouter.post("/forgotPassword", forgotPassword);

// ✅ Reset Password
UserRouter.post("/resetPassword", resetPassword);

module.exports = UserRouter;
