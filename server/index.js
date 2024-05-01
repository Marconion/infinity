const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 8050;

const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();

app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/posts", async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: "Stored new post.", post: newPost });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const data = JSON.parse(fs.readFileSync("posts.json", "utf8"));
  const user = data.find((user) => user.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, console.log(`Server started at port ${PORT}.`));
