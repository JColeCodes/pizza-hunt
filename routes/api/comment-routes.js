const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// PUT at /api/pizzas/:pizzaId
router.route('/:pizzaId').post(addComment);

// DELETE at /:pizzaId/:commentId
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;