const { Router } = require("express");
const {
    getAllUsers,
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword
} = require("../Controller/UserController");

const UserRouter = Router();

UserRouter.get("/all", getAllUsers);

UserRouter.post("/register", registerUser);

UserRouter.post("/login", loginUser);

UserRouter.post("/forgotPassword", forgotPassword);

UserRouter.post("/resetPassword", resetPassword);

module.exports = UserRouter;
