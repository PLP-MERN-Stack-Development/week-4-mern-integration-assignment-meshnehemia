import PostCard from "./PostCard";
import Loader from "../ui/Loader";

const PostList = ({ posts, loading }) => {
  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;