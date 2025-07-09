import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.author?.username}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>
        <Link to={`/posts/${post._id}`}>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-primary-600 mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
        {post.category && (
          <span className="inline-block bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded">
            {post.category.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCard;