import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 👇 Layout wraps all child routes using <Outlet /> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="posts/:id" element={<PostPage />} />
            <Route path="category/:categoryId" element={<CategoryPage />} />
            <Route path="login" element={<AuthPage type="login" />} />
            <Route path="register" element={<AuthPage type="register" />} />

            {/* ✅ Protected routes */}
            <Route element={<PrivateRoute />}>
              <Route path="create-post" element={<CreatePostPage />} />
              <Route path="edit-post/:id" element={<EditPostPage />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
