const express = require('express');

const { User, Address } = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/address', async (req, res) => {
  const newAddress = req.body;

  new Address(newAddress).save().then((savedAddress) => {
    res.json(savedAddress);
  });
});

router.post('/user', async (req, res) => {
  const newUser = req.body;

  new User(newUser).save().then((savedUser) => {
    res.json(savedUser);
  });
});

router.get('/user/:userId', async (req, res) => {
  // gasesc utilizatorul dupa id
  // sa gasesc adresa lui dupa id
  const foundUser = await User.findById(req.params.userId).exec();
  res.json(foundUser);
});

module.exports = router;
