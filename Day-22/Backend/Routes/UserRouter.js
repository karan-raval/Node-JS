const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Model/UserSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const UserRouter = Router();

UserRouter.post("/register", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 5, async (err, hash) => {
      if (err) {
        return res.send({ msg: err });
      }
      let obj = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      };
      let data = await UserModel.create(obj);
      res.status(200).send({ msg: "User registered successfully", data });
    });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userID: user._id, username: user.username },
            process.env.secret
          );
          res.status(200).send({ msg: "User Logged in successfully", token });
        } else {
          res.status(501).send({ msg: "Incorrect Passwrod" });
        }
      });
    } else {
      res.status(501).send({ msg: "User not registered" });
    }
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

UserRouter.post("/changepassword", async (req, res) => {
  // res.send({msg:"hahahaha"})
  const { email, oldpassword, newpassword, confirmpassword } = req.body;
  try {
    let user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).send({ msg: "User not Registered" });
    }
    let result = await bcrypt.compare(oldpassword,user.password);
    if(result){
        if (newpassword == confirmpassword) {
  
            let hash = await bcrypt.hash(newpassword,5);
            let data = await UserModel.finOneAndUpdate(
              { email: email },
              { password: hash }
            )
            res.status(200).send({msg : "Changed !!",data})
        } else {
         return res.status(400).send({ msg: "Confirm Password is Not Similar" });
        }
    }else{
      return  res.status(400).send({ msg: "Incorrect Passwrod" });
    }
  } catch (error) {
    return res.status(501).send({ msg: error.message });
  }
});

module.exports = UserRouter;
