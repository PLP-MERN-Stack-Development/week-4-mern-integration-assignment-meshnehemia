import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuth } from '../context/AuthContext';

const AuthPage = ({ type = 'login' }) => {
  const [authType, setAuthType] = useState(type);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const toggleAuthType = () => {
    setAuthType(authType === 'login' ? 'register' : 'login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        {authType === 'login' ? (
          <>
            <LoginForm onLogin={login} />
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={toggleAuthType}
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Register
              </button>
            </p>
          </>
        ) : (
          <>
            <RegisterForm onRegister={register} />
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={toggleAuthType}
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;