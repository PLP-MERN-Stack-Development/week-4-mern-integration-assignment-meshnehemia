import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("blogUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const { data } = await loginUser(credentials);
      setUser(data);
      localStorage.setItem("blogUser", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await registerUser(userData);
      setUser(data);
      localStorage.setItem("blogUser", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("blogUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);