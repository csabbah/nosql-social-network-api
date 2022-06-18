const { Thought } = require('../models');

const thoughtController = {
  // Get all Users
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'thoughtText',
        // Adding a '-' indicates we don't want to return this data '__v"
        select: '-__v',
      })
      // This select statement is attached to the parent User data
      .select('-__v')
      // This would sort based on the User ID and return the newest Users first
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
module.exports = thoughtController;
