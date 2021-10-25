const express = require("express");

const connectDB = require("./db/db.connect");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const postRoutes = require("./routes/post.router");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to InfyPics-Backend-API");
});

app.use("/api/v1/posts", postRoutes);

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
