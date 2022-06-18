const router = require('express').Router();

// Deconstruct user-controller
const {
  getAllUsers,
  createUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get().put().delete();

module.exports = router;
