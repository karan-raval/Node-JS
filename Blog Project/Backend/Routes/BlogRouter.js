const { Router } = require("express");
const isAuth = require("../Middleware/isAuth");
const BlogModel = require("../Model/BlogSchema");
const BlogRouter = Router();

BlogRouter.post("/createblog", isAuth, async (req, res) => {
  try {
    let data = await BlogModel.create(req.body);
    res.send(data);
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

BlogRouter.get("/allBlogs", async (req, res) => {
  try {
    let data = await BlogModel.find().populate("userId", "email username");
    res.status(200).send(data);
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

BlogRouter.get("/myBlogs", isAuth, async (req, res) => {
  try {
    let data = await BlogModel.find({ userId: req.body.userId }).populate(
      "userId",
      "email username"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

BlogRouter.get("/allBlogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = await BlogModel.findById(id).populate(
      "userId",
      "email username"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

BlogRouter.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = await BlogModel.findById(id);
    let a = data.like + 1;
    let d = await BlogModel.findByIdAndUpdate(id, { like: a });
    res.status(200).send({ d });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});


BlogRouter.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id) // Get the blog ID from the request body
    if (!id) {
      return res.status(400).send({ msg: "Blog ID is required." });
    }

    const result = await BlogModel.findById(id);
    console.log(result)

    if (!result) {
      return res
        .status(404)
        .send({ msg: "Blog not found or not authorized to delete." });
    }

    res.send({ msg: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send({
      msg: "An error occurred while deleting the blog.",
      error: error.message,
    });
  }
});

BlogRouter.get("/editget/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await BlogModel.findById(id);
    console.log(blog);


    if (!blog) {
      return res.status(404).send({ msg: "Blog not found" });
    }

    res.send({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

BlogRouter.patch("/editblog", isAuth, async (req, res) => {
  try {
    const { id } = req.body;
    
    const blog = await BlogModel.findByIdAndUpdate(id,req.body);
    console.log(blog)

    if (!blog) {
      return res.status(404).send({ msg: "Blog not found" });
    }

    res.status(200).send({ msg: "Blog updated successfully", blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// Like/Unlike a blog
BlogRouter.patch("/:blogId/like", async (req, res) => {
  const { blogId } = req.params;
  const { userId } = req.body;

  try {
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    const likedIndex = blog.likedBy.indexOf(userId);

    if (likedIndex === -1) {
      // If not liked yet, add the user to likedBy and increment likes
      blog.likedBy.push(userId);
      blog.like += 1;
    } else {
      // If already liked, remove the user and decrement likes
      blog.likedBy.splice(likedIndex, 1);
      blog.like -= 1;
    }

    await blog.save();
    res.json(blog);
  } catch (error) {
    console.error("Error liking/unliking the blog:", error);
    res.status(500).json({ msg: "Server error" });
  }
});



module.exports = BlogRouter;
