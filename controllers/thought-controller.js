const { Thought } = require('../models');

const thoughtController = {
  // Get all Thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        // Adding a '-' indicates we don't want to return this data '__v"
        select: '-__v',
      })
      // This select statement is attached to the parent Thought data
      .select('-__v')
      // This would sort based on the User ID and return the newest Thoughts first
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v')
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No Thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
module.exports = thoughtController;
