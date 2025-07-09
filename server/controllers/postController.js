const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author category');
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author category');
  if (post) res.json(post);
  else res.status(404).json({ message: 'Post not found' });
};

exports.createPost = async (req, res) => {
  const newPost = new Post({ ...req.body, author: req.user._id });
  const savedPost = await newPost.save();
  console.log(savedPost);
  res.status(201).json(savedPost);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};