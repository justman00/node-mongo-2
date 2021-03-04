const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
    },
  ],
});

const Book = mongoose.model('Book', bookSchema);

const authorSchema = new mongoose.Schema({
  name: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const Author = mongoose.model('Author', authorSchema);

module.exports = { Book, Author };
