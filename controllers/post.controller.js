const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
  try {
    const foundPosts = await Post.find({
      userEmail: req.query.userEmail,
    });

    res.status(200).json({
      success: true,
      message: "All saved Images",
      savedImages: foundPosts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
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
    console.log("create error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const foundPost = await Post.findOne({
      userEmail: req.query.userEmail,
      imageID: req.params.id,
    });

    if (!foundPost) {
      return res
        .status(400)
        .json({ success: false, message: "Image doesn't exists" });
    } else {
      await Post.findOneAndDelete({
        userEmail: req.query.userEmail,
        imageID: req.params.id,
      });
      const allPosts = await Post.find({
        userEmail: req.query.userEmail,
      });
      res.status(200).json({
        success: true,
        message: "Image removed successfully",
        savedImages: allPosts,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
