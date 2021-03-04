const router = require('express').Router();
const { Author, Book } = require('./model');

router.post('/author', async (req, res) => {
  new Author(req.body).save().then((author) => {
    res.json(author);
  });
});

// creez o carte si ii dau author ids
// pentru fiecare author id trebuie sa ii adaug o carte in colectia
router.post('/book', async (req, res) => {
  const createdBook = await new Book(req.body).save();

  const updatedAuthors = await Promise.all(
    createdBook.authors.map((authorId) => {
      return Author.updateOne(
        { _id: authorId },
        {
          $push: {
            books: createdBook._id,
          },
        },
        { upsert: true }
      ).exec();
    })
  );

  res.json({ createdBook, updatedAuthors });
});
// 604130c406be2b84d7195ddd
// 604131e3563a8185baf320f2

module.exports = router;
