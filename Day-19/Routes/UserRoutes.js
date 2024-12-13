const { Router } = require("express");
const passport = require("passport");
const UserModel = require("../Model/UserSchema");
const LocalStratergy = require("passport-local").Strategy;

const UserRouter = Router();
passport.use(
  new LocalStratergy(async (username, password, done) => {
    let user = await UserModel.findOne({ username });
    if (!user) {
      return done(null, false, { msg: "user not register" });
    }
    if (user.password != password) {
      return done(null, false, { msg: "incorrect password" });
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await UserModel.findById(id);
  done(null, user);
});

UserRouter.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

UserRouter.post("/signup", async (req, res) => {
  try {
    let data = req.body;
    await UserModel.create(data);
    res.status(200).send({ msg: "register successfully" });
  } catch (error) {
    res.status(501).send({ err: error.message });
  }
});

module.exports = UserRouter;
