const jwt = require("jsonwebtoken");
const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
require('dotenv').config();
const nodemailer = require("nodemailer");

let otpStore = {};

// ✅ Get all users
const getAllUsers = async (req, res) => {
    let data = await UserModel.find();
    res.send(data);
};

// ✅ Register a new user
const registerUser = async (req, res) => {
    const { username, email, password, role, adminCode } = req.body;
    try {
        if (role == 'admin' && adminCode != process.env.secret) {
            return res.status(501).send({ msg: "Unauthorized !!" });
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(501).send({ msg: err });
            }
            let obj = {
                username: username,
                email: email,
                password: hash,
                role: role
            };
            let data = await UserModel.create(obj);
            res.status(200).send({ msg: "User Registered Successfully", data });
        });
    } catch (error) {
        res.status(501).send({ msg: error.message });
    }
};

// ✅ Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.send({ msg: "User not Registered" });
        }
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign(
                        { userID: user._id, username: user.username, role: user.role },
                        process.env.secret
                    );
                    res.status(200).send({ msg: "User Logged in successfully", token });
                } else {
                    res.status(501).send({ msg: "Incorrect Password" });
                }
            });
        } else {
            res.status(501).send({ msg: "User not registered" });
        }
    } catch (error) {
        res.status(501).send({ msg: error.message });
    }
};

// ✅ Forgot Password (Send OTP)
const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        let user = await UserModel.findOne({ email });
        if (user) {
            let otp = Math.round(123594 + Math.random() * 10000);
            otpStore[email] = otp;

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.gmail,
                    pass: process.env.passkey,
                },
            });
            let mailOption = {
                from: process.env.gmail,
                to: email,
                subject: "OTP for Password Reset",
                text: `Your OTP for password reset is ${otp}`,
            };

            transporter.sendMail(mailOption, (error, info) => {
                if (error) {
                    return res.status(400).send({ msg: "Unable to send OTP" });
                }
                res.status(200).send({ msg: "OTP Sent Successfully" });
            });
        } else {
            res.status(500).send({ msg: "Email Not Registered" });
        }
    } catch (error) {
        res.status(501).send({ msg: error.message });
    }
};

// ✅ Reset Password
const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    console.log(otpStore, email, otp, newPassword);
    try {
        if (otpStore[email] == otp) {
            let hashedPassword = await bcrypt.hash(newPassword, 10);
            let data = await UserModel.findOneAndUpdate(
                { email: email },
                { password: hashedPassword }
            );
            otpStore[email] = "";
            res.send({ msg: "Password Changed Successfully", data });
        } else {
            res.send({ msg: "OTP Incorrect" });
        }
    } catch (error) {
        res.status(501).send({ msg: error.message });
    }
};

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword
};
