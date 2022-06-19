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
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
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

  // !!!!READ NOTE - Add a method to not add duplicate friendId's
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: { _id: params.friendId } } },
      { new: true, runValidators: true }
    )
      .then((dbFriendData) => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No Friend found with this id!' });
          return;
        }
        res.json(dbFriendData);
      })
      .catch((err) => res.json(err));
  },

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: { _id: params.friendId } } },
      { new: true }
    )
      .then((dbFriendData) => res.json(dbFriendData))
      .catch((err) => res.json(err));
  },

  // !!!!READ NOTE ADD A FUNCTION HERE TO DELETE ALL USERS ASSOCIATED THOUGHTS - USE A MONGOOSE FUNCTION
  // Refer to the Remove thought function in thought-controller for reference
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};
module.exports = userController;
