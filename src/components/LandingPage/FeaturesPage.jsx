import React from 'react';
import { FaBook, FaCalendarAlt, FaClock, FaRobot, FaChartLine, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturesPage = () => {
  const features = [
    {
      icon: <FaBook className="text-teal-400 text-2xl" />,
      title: "Subjects & Topics",
      description: "Organize your study materials with subjects and topics for structured learning."
    },
    {
      icon: <FaCalendarAlt className="text-purple-400 text-2xl" />,
      title: "Smart Scheduling",
      description: "AI-generated study plans optimized for your available time and deadlines."
    },
    {
      icon: <FaClock className="text-amber-400 text-2xl" />,
      title: "Study Sessions",
      description: "Track your daily study sessions with built-in Pomodoro timer."
    },
    {
      icon: <FaRobot className="text-rose-400 text-2xl" />,
      title: "AI Assistant",
      description: "Get summaries, flashcards, and study tips powered by Gemini AI."
    },
    {
      icon: <FaTools className="text-blue-400 text-2xl" />,
      title: "Productivity Tools",
      description: "Reminders, progress tracking, and schedule adjustments to keep you on track."
    },
    {
      icon: <FaChartLine className="text-emerald-400 text-2xl" />,
      title: "Progress Analytics",
      description: "Visual dashboards showing your study patterns and completion rates."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 sm:text-5xl">
             Features
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to study smarter, not harder. Designed for focus and efficiency.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-teal-400/30"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300/90">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 mb-6">And many more features...</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {["Calendar Sync", "Export Reports", "Crash Courses", "Mobile Friendly", "Dark Mode", "Cloud Backup", "Collaboration", "Offline Access"].map((feature, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full border border-gray-700 hover:border-teal-400/50 transition-colors duration-300"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;