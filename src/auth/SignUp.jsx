import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setCredentials } from '../redux/authSlice';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dailyStudyHours, setDailyStudyHours] = useState(2);
  const [preferredStudyTime, setPreferredStudyTime] = useState('evening');
  const [totalStudyGoalHours, setTotalStudyGoalHours] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.REGISTER}`,
        { 
          name, 
          email, 
          password,
          preferences: {
            dailyStudyHours,
            preferredStudyTime,
            totalStudyGoalHours
          }
        },
        { withCredentials: true }
      );
      
      if (response.data.success) {
        dispatch(setCredentials({
          user: response.data.user,
          token: response.data.token
        }));
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#BB8AF0' }}>
      <div className="w-full max-w-4xl flex bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"  
            alt="Sign Up Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 space-y-8">
          <h2 className="text-2xl font-bold text-center text-gray-900">Create a new account</h2>
          {error && <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">{error}</div>}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dailyStudyHours" className="block text-sm font-medium text-gray-700">
                  Daily Study Goal (hours)
                </label>
                <input
                  id="dailyStudyHours"
                  name="dailyStudyHours"
                  type="number"
                  min="1"
                  max="24"
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={dailyStudyHours}
                  onChange={(e) => setDailyStudyHours(parseInt(e.target.value))}
                />
              </div>

              <div>
                <label htmlFor="totalStudyGoalHours" className="block text-sm font-medium text-gray-700">
                  Total Goal (hours)
                </label>
                <input
                  id="totalStudyGoalHours"
                  name="totalStudyGoalHours"
                  type="number"
                  min="0"
                  step="1"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={totalStudyGoalHours}
                  onChange={(e) => setTotalStudyGoalHours(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferredStudyTime" className="block text-sm font-medium text-gray-700">
                Preferred Study Time
              </label>
              <select
                id="preferredStudyTime"
                name="preferredStudyTime"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={preferredStudyTime}
                onChange={(e) => setPreferredStudyTime(e.target.value)}
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
            </div>
          </form>
          
          <div className="text-sm text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;