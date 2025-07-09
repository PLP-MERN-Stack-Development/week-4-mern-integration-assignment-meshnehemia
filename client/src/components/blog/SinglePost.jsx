import { formatDate } from '../../utils/helpers';

const SinglePost = ({ post }) => {
  return (
    <article className="max-w-3xl mx-auto">
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-900">{post.author?.username}</span>
        <span className="mx-2">•</span>
        <span>{formatDate(post.createdAt)}</span>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      
      {post.category && (
        <span className="inline-block bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full mb-6">
          {post.category.name}
        </span>
      )}
      
      <div className="prose max-w-none text-gray-700">
        <p>{post.content}</p>
      </div>
      
      {post.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default SinglePost;