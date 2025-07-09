import { formatDate } from '../../utils/helpers';

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-6">
      {comments?.map((comment) => (
        <div key={comment._id} className="border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="font-medium text-gray-900">
              {comment.author?.username}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(comment.createdAt)}
            </span>
          </div>
          <p className="text-gray-700">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;