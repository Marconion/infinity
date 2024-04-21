import express from "express";
const app = express();
const PORT = 5000;

app.get("/Api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
