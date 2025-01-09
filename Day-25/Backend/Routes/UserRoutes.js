const { Router } = require("express")
const jwt = require("jsonwebtoken")
const UserModel = require("../Model/UserModel")
const bcrypt = require("bcrypt");
require('dotenv').config()
const UserRouter = Router()


UserRouter.get("/all", async (req, res) => {
    let data = await UserModel.find()
    res.send(data)
})

UserRouter.post("/register", async (req, res) => {
    const { username, email, password, role, adminCode } = req.body
    try {

        if (role == 'admin' && adminCode != process.env.secret) {
            return res.status(501).send({ msg: "Unauthorised !!" })
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
            let data = await UserModel.create(obj)
            res.status(200).send({ msg: "User Registered Successfully", data })
        })
    } catch (error) {
        res.status(501).send({ msg: error.message })
    }
})

UserRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.send({ msg: "User not Registered" })
        }
        if (user.password != password) {
            return res.send({ msg: "Wrong Password" })
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, "nodejs")
        res.send({ msg: "User Login Successfull", token: token })
    } catch (error) {
        res.status(501).send({ msg: error.message })
    }
})


module.exports = UserRouter