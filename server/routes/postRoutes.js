// ✅ Import required modules
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Authentication middleware
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController'); // CRUD handlers

// 📥 Public GET Routes
router.get('/', getPosts);           // GET all posts
router.get('/:id', getPostById);     // GET a specific post by ID

// 🔐 Protected Routes (need JWT token)
router.post('/', protect, createPost);       // Create post
router.put('/:id', protect, updatePost);     // Update post
router.delete('/:id', protect, deletePost);  // Delete post

// 🚀 Export the router
module.exports = router;
