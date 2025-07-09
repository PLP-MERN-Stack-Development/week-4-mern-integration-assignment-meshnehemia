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
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route element={<PrivateRoute />}>
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/edit-post/:id" element={<EditPostPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;