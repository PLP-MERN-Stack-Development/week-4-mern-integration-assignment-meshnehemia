import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          MERN Blog
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary-600">
            Home
          </Link>
          
          {user ? (
            <>
              <Link to="/create-post" className="text-gray-700 hover:text-primary-600">
                Create Post
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-primary-600"
              >
                Logout
              </button>
              <span className="text-gray-700">Hi, {user.username}</span>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-primary-600">
                Login
              </Link>
              <Link to="/register" className="text-gray-700 hover:text-primary-600">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;