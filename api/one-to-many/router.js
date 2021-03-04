const express = require('express');
const { Blog, Comment } = require('./model');

const router = express.Router();

router.post('/blog', async (req, res) => {
  // creeem un blog(articol)
  const savedBlog = await new Blog(req.body).save();

  res.json(savedBlog);
});

// adauga un comentariu la un post existent - embedding
// router.post('/blog/:blogId/comments', async (req, res) => {
//   const comment = req.body;
//   const editedPost = await Blog.updateOne(
//     { _id: req.params.blogId },
//     {
//       $push: {
//         comments: comment,
//       },
//     },
//     {
//         upsert: true
//     }
//   ).exec();

//   res.json(editedPost);
// });

router.post('/blog/:blogId/comments', async (req, res) => {
  const addedComment = await new Comment({
    ...req.body,
    blog_id: req.params.blogId,
  }).save();

  res.json(addedComment);
});

router.get('/blog/:blogId/:commentId', async (req, res) => {
  const foundBlog = await Blog.findOne({ _id: req.params.blogId }).exec();
  const comments = await Comment.find(
    { blog_id: req.params.blogId, _id: req.params.commentId },
    undefined,
    { limit: 5 }
  ).exec();

  res.json({ foundBlog, comments });
});

module.exports = router;
