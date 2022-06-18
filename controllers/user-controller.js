const { User } = require('../models');

const userController = {
  // Get all Users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        // Adding a '-' indicates we don't want to return this data '__v"
        select: '-__v',
      })
      // This select statement is attached to the parent User data
      .select('-__v')
      // This would sort based on the User ID and return the newest Users first
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
module.exports = userController;
