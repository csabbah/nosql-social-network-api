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
  friends: [],
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
});

UserSchema.virtual('friendCount').get(function () {
  return this.friends.reduce(
    (total, friends) => total + friends.replies.length + 1,
    0
  );
});

// Create the User model using the UserSchema then export it
const User = model('User', UserSchema);

module.exports = User;
