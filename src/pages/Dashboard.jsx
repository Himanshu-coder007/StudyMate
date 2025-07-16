// src/pages/Dashboard.js
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../redux/authSlice';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const { user, isLoading, isRehydrated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.LOGOUT}`, {
        withCredentials: true
      });
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (!isRehydrated || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600 mt-2">You're now logged in to your account.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;