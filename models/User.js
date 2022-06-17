const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // Need to add thoughts
  // Need to add friends
});

// Create the User model using the userSchema then export it
const User = model('Pizza', UserSchema);
module.exports = User;
