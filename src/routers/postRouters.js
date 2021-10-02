const express = require('express');
const router = new express.Router();
const {postValidation} = require('../middlewares/validationMiddlewares.js');
const {
  getPosts,
  getPostsById,
  postPosts,
  putPosts,
  deletePost,
} = require('../controllers/postsControllers.js');

router.get('/', getPosts);
router.get('/:id', getPostsById);
router.post('/', postValidation, postPosts);
router.put('/:id', postValidation, putPosts);
router.delete('/:id', deletePost);

module.exports = {postsRouter: router};
