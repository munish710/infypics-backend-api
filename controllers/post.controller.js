const Post = require("../models/post.model");

const getAllPosts = (req, res) => {
  console.log("Get All Posts");
};

const createPost = async (req, res) => {
  console.log("Create a Post");
};

const deletePost = (req, res) => {
  console.log("Delete  Post");
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
