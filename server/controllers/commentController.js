const Comment = require('../models/Comment');

exports.getCommentsByPost = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('author', 'username');
  res.json(comments);
};

exports.createComment = async (req, res) => {
  const comment = await Comment.create({
    post: req.params.postId,
    author: req.user._id,
    text: req.body.text,
  });
  res.status(201).json(comment);
};