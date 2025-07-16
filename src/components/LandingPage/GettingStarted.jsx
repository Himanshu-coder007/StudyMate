import React from 'react';
import { FaUserPlus, FaBookOpen, FaCalendarCheck, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GettingStarted = () => {
  
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  }
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started with <span className="text-teal-500">StudyMate</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your smart study journey in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUserPlus className="text-teal-500 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Step 1
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
            <p className="text-gray-600">
              Sign up with email or social media in under 30 seconds
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBookOpen className="text-blue-500 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Step 2
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Add Your Subjects</h3>
            <p className="text-gray-600">
              Input your courses, topics, and deadlines
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCalendarCheck className="text-purple-500 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Step 3
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Generate Schedule</h3>
            <p className="text-gray-600">
              Let AI create your personalized study plan
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-pink-500 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Step 4
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Start Studying</h3>
            <p className="text-gray-600">
              Follow your plan and track your progress
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl p-8 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Study Habits?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who are studying smarter with StudyMate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer shadow-md hover:shadow-lg" onClick={handleLoginRedirect}>
                Get Started - It's Free
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;