const router = require('express').Router();

// Deconstruct user-controller
const { getAllThoughts } = require('../../controllers/thought-controller');

// /api/user
router.route('/').get(getAllThoughts).post();

// /api/users/:id
router.route('/:id').get().put().delete();

module.exports = router;
