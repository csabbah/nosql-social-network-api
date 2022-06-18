const router = require('express').Router();

// Deconstruct user-controller
const {
  getAllThoughts,
  getThoughtById,
} = require('../../controllers/thought-controller');

// /api/user
router.route('/').get(getAllThoughts).post();

// /api/users/:id
router.route('/:id').get(getThoughtById).put().delete();

module.exports = router;
