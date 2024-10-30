// backend/models/User.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
});
module.exports = mongoose.model('User', UserSchema);
