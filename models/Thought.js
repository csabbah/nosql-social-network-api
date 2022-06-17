const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Need to add a getter method to format timestamp on query
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Need to add a getter method to format timestamp on query
  },
  // Need to add username (the user that created the thought)
  // Need to add reactions (similar to replies)

  // Add Schema settings
  // - reactionCount (retrieve length of thought's reactions array field on query)
});

// Create the Thought model using the ThoughtSchema then export it
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
