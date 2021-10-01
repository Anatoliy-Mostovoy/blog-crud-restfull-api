const express = require("express");
const router = express.Router();
const Joi = require("joi");

let posts = [
  {
    id: "1",
    topic: "test",
    text: "test text",
  },
  {
    id: "2",
    topic: "test2",
    text: "test2 text",
  },
  {
    id: "3",
    topic: "test3",
    text: "test3 text",
  },
];

router.get("/", (req, res) => {
  res.json({ posts });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const [post] = posts.filter((item) => item.id === id); //деструктуризация. Filter возвраает [] мы достаем один обьект
  if (!post) {
    return res
      .status(400)
      .json({ status: `sorry, there are now post with id# ${id}` });
  }
  res.json({ post });
});

router.post("/", (req, res) => {
  const { topic, text } = req.body;
  const schema = Joi.object({
    topic: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().alphanum().min(10).max(200).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  posts.push({ id: new Date().getTime().toString(), topic, text });
  res.json({ status: "success" });
});

router.put("/:id", (req, res) => {
  const schema = Joi.object({
    topic: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().alphanum().min(10).max(200).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }
  const { topic, text } = req.body;
  posts.forEach((post) => {
    if (post.id === req.params.id) {
      post.text = text;
      post.topic = topic;
    }
  });
  res.json({ status: "success" });
});

router.delete("/:id", (req, res) => {
  posts = posts.filter((item) => item.id !== req.params.id);
  res.json({ status: "success" });
});

module.exports = { postsRouter: router };
