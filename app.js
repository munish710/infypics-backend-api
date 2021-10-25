const express = require("express");
const cors = require("cors");

const connectDB = require("./db/db.connect");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const postRoutes = require("./routes/post.router");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://infypics.netlify.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
