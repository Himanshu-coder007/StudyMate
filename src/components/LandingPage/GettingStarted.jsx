import React from 'react';
import { FaUserPlus, FaBookOpen, FaCalendarCheck, FaRocket } from 'react-icons/fa';

const GettingStarted = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started with StudyMate
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Begin your smart study journey in just a few minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-indigo-50 p-8 rounded-xl text-center">
            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUserPlus className="text-indigo-600 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Step 1
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
            <p className="text-gray-600">
              Sign up with email or social media in under 30 seconds
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-indigo-50 p-8 rounded-xl text-center">
            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBookOpen className="text-indigo-600 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Step 2
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Add Your Subjects</h3>
            <p className="text-gray-600">
              Input your courses, topics, and deadlines
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-indigo-50 p-8 rounded-xl text-center">
            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCalendarCheck className="text-indigo-600 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Step 3
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Generate Schedule</h3>
            <p className="text-gray-600">
              Let AI create your personalized study plan
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-indigo-50 p-8 rounded-xl text-center">
            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-indigo-600 text-3xl" />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                Step 4
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Start Studying</h3>
            <p className="text-gray-600">
              Follow your plan and track your progress
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Study Habits?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who are studying smarter with StudyMate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
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