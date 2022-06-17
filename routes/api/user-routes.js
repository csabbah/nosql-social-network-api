const router = require('express').Router();

// Deconstruct user-controller
const { getAllUsers } = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post();

// /api/users/:id
router.route('/:id').get().put().delete();

module.exports = router;
