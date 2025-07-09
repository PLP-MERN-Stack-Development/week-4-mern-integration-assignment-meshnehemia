import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostList from '../components/blog/PostList';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts({ category: categoryId });
        setPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [categoryId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Posts in Category</h1>
      <PostList posts={posts} loading={loading} />
    </div>
  );
};

export default CategoryPage;