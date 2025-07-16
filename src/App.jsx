// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import LandingPage from './pages/LandingPage';
import Login from './auth/Login.jsx';
import SignUp from './auth/SignUp.jsx';
import Dashboard from './pages/Dashboard';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { rehydrate } from './redux/authSlice';

function AuthInitializer() {
  const dispatch = useDispatch();
  const { isRehydrated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isRehydrated) {
      dispatch(rehydrate());
    }
  }, [dispatch, isRehydrated]);

  return null;
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<LoadingSpinner />} 
        persistor={persistor}
      >
        <Router>
          <AuthInitializer />
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;