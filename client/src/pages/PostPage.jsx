import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById, createComment } from "../services/api";
import Loader from "../components/ui/Loader";
import SinglePost from "../components/blog/SinglePost";
import CommentForm from "../components/comments/CommentForm";
import CommentList from "../components/comments/CommentList";
import { useAuth } from "../context/AuthContext";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getPostById(id);
        setPost(data);
        setComments(data.comments || []);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (commentData) => {
    try {
      const { data } = await createComment(id, commentData);
      setComments([...comments, data]);
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-8">
      <SinglePost post={post} />
      
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments</h2>
        
        {user ? (
          <CommentForm onSubmit={handleCommentSubmit} />
        ) : (
          <p className="text-gray-600 mb-6">
            Please <a href="/login" className="text-primary-600 hover:underline">login</a> to leave a comment.
          </p>
        )}
        
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default PostPage;