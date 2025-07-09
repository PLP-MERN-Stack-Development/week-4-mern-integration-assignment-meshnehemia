import axios from "./axios";

export const registerUser = (userData) => axios.post("/users/register", userData);
export const loginUser = (credentials) => axios.post("/users/login", credentials);

export const getPosts = (params) => axios.get("/posts", { params });
export const getPostById = (id) => axios.get(`/posts/${id}`);
export const createPost = (postData) => axios.post("/posts", postData);
export const updatePost = (id, postData) => axios.put(`/posts/${id}`, postData);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const getCategories = () => axios.get("/categories");
export const createCategory = (categoryData) => axios.post("/categories", categoryData);

export const getCommentsByPost = (postId) => axios.get(`/posts/${postId}/comments`);
export const createComment = (postId, commentData) => axios.post(`/posts/${postId}/comments`, commentData);