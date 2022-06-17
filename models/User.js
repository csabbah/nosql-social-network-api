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
  // Need to add thoughts (id values that reference the thought model)
  // Need to add friends (id values that references the User model (self-reference))

  // Add Schema settings
  // - friendCount (retrieve length of user's friends array field on query)
});

// Create the User model using the UserSchema then export it
const User = model('User', UserSchema);

module.exports = User;
