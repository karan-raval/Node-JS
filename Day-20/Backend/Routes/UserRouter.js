



// UserRouter.post("/signup",async(req,res)=>{
//     // const{usename,email,password}=req.body
//     const data = req.body;
//   try {
//        const { email } = data;

//        // Check if email already exists
//        const existingUser = await UserModel.findOne({ email });
       
//        if (existingUser) {
//          return res.status(400).json({
//            message: "Email is already registered"
//          });
//        }

//        // If email doesn't exist, proceed with registration
//        let a = new UserModel(data)
//        await a.save()
//        return res.redirect("/login")
//   } catch (error) {
//       res.status(401).json({msg : error.message})
//   }
// })

// UserRouter.post("/login",async(req,res)=>{
//     const {email,password}  = req.body
//     console.log(email,password)
//   try {
//       let user = await UserModel.findOne({email : email})
//       console.log(user)
//       if(!user){
//         return res.status(401).json({msg : "Email is Not Registered"})
//       }
//       if(user.password != password){
//           return res.status(401).json({msg : "Password Incorrect"})
//       }
//       res.status(200).json({msg : "User Login Successfully"})
//   } catch (error) {
//       res.status(401).json({msg : error.message})
//   }
// })


// module.exports=UserRouter


const express = require("express");
const UserModel = require("../Model/UserSchema");
const BLogModel = require("../Model/BlogSchema");
const UserRouter = express.Router();



UserRouter.post("/signup", async (req, res) => {
  try {
    const UserData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    let data = await UserModel.create(UserData);
    res.status(200).send({ msg: "User Added successfully", data: data });
  } catch (error) {
    res.status(401).send({ msg: error.message });
  }
});

UserRouter.post("/login",async(req,res)=>{
  const {email,password}  = req.body
  console.log(email,password)
try {
    let user = await UserModel.findOne({email : email})
    console.log(user)
    if(!user){
      return res.status(401).json({msg : "Email is Not Registered"})
    }
    if(user.password != password){
        return res.status(401).json({msg : "Password Incorrect"})
    }
    res.status(200).json({msg : "User Login Successfully"})
} catch (error) {
    res.status(401).json({msg : error.message})
}
})


UserRouter.post("/createblog",async(req,res)=>{
    try {
      const BlogData = {
        blogname: req.body.blogname,
        heading: req.body.heading,
        des: req.body.des,
        imgURL: req.body.imgURL,
        date: req.body.all,
      };
      let data = await BLogModel.create(BlogData);
      res.status(200).send({ msg: "User Added successfully", data: data });
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  });



// UserRouter.get("/allmovie", async (req, res) => {
//   try {
//     let data = await UserModel.find();
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(401).send({ msg: error.message});
//   }
// });
// UserRouter.get("/allmovie/:id", async (req, res) => {
//   try {
//     let data = await UserModel.findOne({_id : req.params.id});
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(401).send({ msg: error.message});
//   }
// });


// UserRouter.delete("/deletemovie/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await UserModel.findById(id);
    
//     if (data.image) {
//       const image_path = path.join(__dirname, "../public/assets", data.image);
      
//       if (fs.existsSync(image_path)) {
//         fs.unlinkSync(image_path);
//       }
//     }
    
//     await UserModel.findByIdAndDelete(id);
//     res.status(200).send({ msg: "Data Deleted Successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).send({ msg: error.message });
//   }
// });

// UserRouter.put("/editmovie/:id",  async (req, res) => {
//   try {
//     const { id } = req.params;
//     const oldMovie = await UserModel.findById(id);
    
//     // Prepare updated movie data
//     const movieData = {
//       movieName: req.body.movieName,
//       imdbRating: req.body.imdbRating,
//       type: req.body.type,
//     };
//     console.log(movieData)


//     res.status(200).send({ 
//       msg: "Movie Updated Successfully", 
//       data: updatedMovie 
//     });

//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).send({ msg: error.message });
//   }
// });

module.exports = UserRouter;