import { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import PostList from "../components/blog/PostList";
import Loader from "../components/ui/Loader";
import Pagination from "../components/ui/Pagination";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await getPosts({ page: currentPage });
        setPosts(data.posts);
        setTotalPages(data.pages);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Posts</h1>
      <PostList posts={posts} loading={loading} />
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;