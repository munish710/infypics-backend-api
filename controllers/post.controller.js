const Post = require("../models/post.model");

const getAllPosts = (req, res) => {
  console.log("Get All Posts");
};

const createPost = async (req, res) => {
  try {
    const foundPost = await Post.findOne({
      userEmail: req.body.userEmail,
      imageID: req.body.imageID,
    });

    if (!foundPost) {
      await Post.create(req.body);
      res
        .status(200)
        .json({ success: true, message: "Image Saved Successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Image Already Saved" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};

const deletePost = (req, res) => {
  console.log("Delete  Post");
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
