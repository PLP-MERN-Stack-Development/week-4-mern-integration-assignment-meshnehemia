import axios from './axios';

export const registerUser = (userData) => axios.post('/api/users/register', userData);
export const loginUser = (credentials) => axios.post('/api/users/login', credentials);

// Add all your other API endpoints here
export const getPosts = (params) => axios.get('/api/posts', { params });
export const getPostById = (id) => axios.get(`/api/posts/${id}`);
export const createPost = (postData) => axios.post('/api/posts', postData);
export const updatePost = (id, postData) => axios.put(`/api/posts/${id}`, postData);
export const deletePost = (id) => axios.delete(`/api/posts/${id}`);

export const getCategories = () => axios.get('/api/categories');
export const createCategory = (categoryData) => axios.post('/api/categories', categoryData);

export const getCommentsByPost = (postId) => axios.get(`/api/posts/${postId}/comments`);
export const createComment = (postId, commentData) => axios.post(`/api/posts/${postId}/comments`, commentData);