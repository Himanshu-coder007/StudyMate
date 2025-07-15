import React from 'react';
import { FaBook, FaCalendarAlt, FaClock, FaRobot, FaChartLine, FaTools } from 'react-icons/fa';

const FeaturesPage = () => {
  const features = [
    {
      icon: <FaBook className="text-indigo-600 text-2xl" />,
      title: "Subjects & Topics",
      description: "Organize your study materials with subjects and topics for structured learning."
    },
    {
      icon: <FaCalendarAlt className="text-indigo-600 text-2xl" />,
      title: "Smart Scheduling",
      description: "AI-generated study plans optimized for your available time and deadlines."
    },
    {
      icon: <FaClock className="text-indigo-600 text-2xl" />,
      title: "Study Sessions",
      description: "Track your daily study sessions with built-in Pomodoro timer."
    },
    {
      icon: <FaRobot className="text-indigo-600 text-2xl" />,
      title: "AI Assistant",
      description: "Get summaries, flashcards, and study tips powered by Gemini AI."
    },
    {
      icon: <FaTools className="text-indigo-600 text-2xl" />,
      title: "Productivity Tools",
      description: "Reminders, progress tracking, and schedule adjustments to keep you on track."
    },
    {
      icon: <FaChartLine className="text-indigo-600 text-2xl" />,
      title: "Progress Analytics",
      description: "Visual dashboards showing your study patterns and completion rates."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
             Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to study smarter, not harder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">And more...</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">Calendar Sync</span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">Export Reports</span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">Crash Courses</span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">Mobile Friendly</span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">Dark Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;