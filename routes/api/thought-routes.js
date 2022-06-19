const router = require('express').Router();

// Deconstruct user-controller
const {
  getAllThoughts,
  getThoughtById,
  addThought,
} = require('../../controllers/thought-controller');

// /api/thoughts/:userId
router.route('/:userId').post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);

// /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete().put();

// /api/thoughts/:userId/:thoughtId/reactions
router.route('/:userId/:thoughtId/reactions').post();

// /api/thoughts/:userId/:thoughtId/:reactionId
router.route('/:userId/:thoughtId/:reactionId').delete();

// /api/thoughts
router.route('/').get(getAllThoughts);

module.exports = router;
