const express = require('express');
const router = new express.Router();
const {postValidation} = require('../middlewares/validationMiddlewares.js');
const {asyncWrapper} = require('../helpers/apiHelpers');
const modelsMiddleware = require('../middlewares/models');
const {
  getPosts,
  getPostsById,
  postPosts,
  putPosts,
  deletePost,
} = require('../controllers/postsControllers.js');

router.use(modelsMiddleware);
router.get('/', asyncWrapper(getPosts));
router.get('/:id', asyncWrapper(getPostsById));
router.post('/', postValidation, asyncWrapper(postPosts));
router.put('/:id', postValidation, asyncWrapper(putPosts));
router.delete('/:id', asyncWrapper(deletePost));

module.exports = {postsRouter: router};
