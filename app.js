const morgan = require("morgan");
const express = require("express");
const app = express();
const { postsRouter } = require("./routers/postRouters.js");

app.use(express.json()); // мидл вар для чтнения json автоматом парсит
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

module.exports = app;
