const mongoose = require('mongoose');

// Linking
const addressSchema = new mongoose.Schema({
  street: String,
  city: String
});

const Address = mongoose.model('Address', addressSchema);

// Embedding
// if used together, store together. User -> Address
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: addressSchema
});

const User = mongoose.model('User', userSchema);

// Masina -> Nr de inmatriculare
// Telefon -> Apple sau Samsung

module.exports = { Address, User };
