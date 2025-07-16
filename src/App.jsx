import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Dashboard from './pages/Dashboard';
import { API_ENDPOINTS } from './constants/apiEndpoints';
import LoadingSpinner from './components/LoadingSpinner';
import ToastNotification from './components/ToastNotification';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const checkAuth = async () => {
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CHECK_AUTH}`,
        { withCredentials: true }
      );

      if (response.data.authenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
      console.error('Auth check error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();

    // Set up axios interceptors
    const requestInterceptor = axios.interceptors.request.use(
      config => {
        // You can add auth headers here if needed
        return config;
      },
      error => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401) {
          // Auto logout if 401 response returned from API
          handleLogout();
          showNotification('Session expired. Please login again.', 'error');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Clean up interceptors
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    showNotification('Login successful!', 'success');
  };

  const handleLogout = async () => {
    try {
      await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.LOGOUT}`,
        { withCredentials: true }
      );
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {notification && (
          <ToastNotification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        
        <Routes>
          <Route path="/" element={<LandingPage isAuthenticated={isAuthenticated} />} />
          
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login 
                  onLogin={handleLogin} 
                  showNotification={showNotification} 
                />
              )
            }
          />
          
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <SignUp 
                  onLogin={handleLogin} 
                  showNotification={showNotification} 
                />
              )
            }
          />
          
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard 
                  user={user} 
                  onLogout={handleLogout} 
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          
          {/* Add more protected routes as needed */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;