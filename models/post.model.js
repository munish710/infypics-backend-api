const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, "User Email is required"],
  },
  imageID: {
    type: String,
    required: [true, "Image ID is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image Url is required"],
  },
  postedByUrl: {
    type: String,
    required: [true, "Author's URL is required"],
  },
  postedByImageUrl: {
    type: String,
    required: [true, "Author's Image URL is required"],
  },
  postedByName: {
    type: String,
    required: [true, "Author's name is required"],
  },
  downloadUrl: {
    type: String,
    required: [true, "Donload URL of image is required"],
  },
});

module.exports = mongoose.model("Post", postSchema);
