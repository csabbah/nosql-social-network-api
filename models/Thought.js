const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Need to add username (the user that created the thought)
  // Need to add reactions (similar to replies)

  // Add Schema settings
  // - reactionCount (retrieve length of thought's reactions array field on query)
});

// Create the Thought model using the ThoughtSchema then export it
const Thought = model('Pizza', ThoughtSchema);

module.exports = Thought;
