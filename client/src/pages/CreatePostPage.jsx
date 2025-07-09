import { useNavigate } from 'react-router-dom';
import PostForm from '../components/blog/PostForm';
import { createPost } from '../services/api';
import { useAuth } from '../context/AuthContext';

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (postData) => {
    try {
      const {data } = await createPost(postData);
      console.log(data)
      alert("");
      navigate('/');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;