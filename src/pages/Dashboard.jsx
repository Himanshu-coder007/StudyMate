import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import LoadingSpinner from '../components/LoadingSpinner';
import ToastNotification from '../components/ToastNotification';

const Dashboard = ({ user, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.LOGOUT}`,
        { withCredentials: true }
      );
      onLogout();
      showNotification('Logged out successfully', 'success');
      navigate('/login');
    } catch (err) {
      showNotification('Logout failed. Please try again.', 'error');
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-500">
                Welcome, {user?.name}
              </span>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center">
                    <LoadingSpinner size="small" className="mr-2" />
                    Logging out...
                  </span>
                ) : (
                  'Logout'
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {notification && (
            <ToastNotification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Welcome to your Dashboard
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>You're successfully authenticated!</p>
              </div>
              <div className="mt-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">User Information</h4>
                    <div className="mt-2">
                      <p className="text-sm text-gray-900">Name: {user?.name}</p>
                      <p className="text-sm text-gray-900">Email: {user?.email}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Account Status</h4>
                    <div className="mt-2">
                      <p className="text-sm text-gray-900">Active</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Quick Actions</h4>
                    <div className="mt-2 space-y-2">
                      <button
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                        onClick={() => navigate('/profile')}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;