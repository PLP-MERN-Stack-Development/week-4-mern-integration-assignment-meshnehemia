import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostForm from '../components/blog/PostForm';
import { getPostById, updatePost } from '../services/api';

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (postData) => {
    try {
      await updatePost(id, postData);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Post</h1>
      <PostForm onSubmit={handleSubmit} initialData={post} />
    </div>
  );
};

export default EditPostPage;