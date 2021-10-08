const morgan = require("morgan");
const express = require("express");
const app = express();
const { postsRouter } = require("./src/routers/postRouters.js");

app.use(express.json()); // мидл вар для чтнения json автоматом парсит
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
