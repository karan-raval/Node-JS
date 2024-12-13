const { Router } = require("express");
const passport = require("passport");
const UserModel = require("../Model/UserSchema");
const LocalStratergy = require("passport-local").Strategy;

const UserRouter = Router();
passport.use(
  new LocalStratergy(
    {usernameField : 'email'},
    async (email, password, done) => {
    let user = await UserModel.findOne({ email });
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

UserRouter.get('/login',(req,res)=>{
  res.render('login.ejs')
})

UserRouter.post("/login", passport.authenticate("local"),async(req,res)=>{
  try {
    res.status(200).send({msg:"login successfully"})
  } catch (error) {
    res.status(501).send({ err: error.message });
  }
})

UserRouter.get('/',(req,res)=>{
  res.render('Home.ejs')
})

module.exports = UserRouter;
