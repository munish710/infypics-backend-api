const express = require("express");

const router = express.Router();

const {
  getAllPosts,
  createPost,
  deletePost,
} = require("../controllers/post.controller");

router.route("/").get(getAllPosts).post(createPost).delete(deletePost);

module.exports = router;
