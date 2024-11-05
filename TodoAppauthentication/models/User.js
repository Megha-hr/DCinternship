const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
  googleId: String,
  username: String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);
