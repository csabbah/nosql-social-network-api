const router = require('express').Router();

// Deconstruct user-controller
// const {} = require('../../controllers/user-controller');

// /api/users
router.route('/').get().post();

// /api/users/:id
router.route('/:id').get().put().delete();

module.exports = router;
