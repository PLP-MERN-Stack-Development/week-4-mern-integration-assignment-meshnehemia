const express = require('express');
const router = express.Router({ mergeParams: true });
const { protect } = require('../middleware/authMiddleware');
const { getCommentsByPost, createComment } = require('../controllers/commentController');

router.route('/')
  .get(getCommentsByPost)
  .post(protect, createComment);

module.exports = router;