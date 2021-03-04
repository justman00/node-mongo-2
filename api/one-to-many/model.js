// Blog article -> [comments]
// Parinte -> [copil]
// Autor -> [carte]
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  text: String,
  created_on: Date,
  blog_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
  },
});

const Comment = mongoose.model('Comment', commentSchema);

// Embedding
const blogSchema = new mongoose.Schema({
  title: String,
  text: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Comment, Blog };
