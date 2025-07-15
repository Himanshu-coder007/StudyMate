import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser, FiBook, FiZap, FiCheckCircle, 
  FiBarChart2, FiRefreshCw  
} from 'react-icons/fi';
import { TfiRocket } from "react-icons/tfi";

const StepCard = ({ step, title, description, icon, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-indigo-600 text-3xl mb-6 shadow-sm border border-indigo-50">
          {icon}
        </div>
      </div>
      <div className="text-center max-w-xs px-2">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-3">
          Step {step}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const DailyFlowCard = ({ time, title, items, color }) => {
  return (
    <motion.div 
      className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-sm border border-gray-100`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white mr-3">
          {time === 'Morning' ? '🌅' : time === 'Study Time' ? '📚' : '🌙'}
        </div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-white text-opacity-80 mr-2 mt-0.5">•</span>
            <span className="text-white text-opacity-90 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Working = () => {
  const steps = [
    {
      step: 1,
      title: "Sign Up & Onboard",
      description: "Quick setup with your study preferences and goals",
      icon: <FiUser className="stroke-current" />
    },
    {
      step: 2,
      title: "Add Subjects",
      description: "Organize your courses with topics and deadlines",
      icon: <FiBook className="stroke-current" />
    },
    {
      step: 3,
      title: "Generate Plan",
      description: "AI creates your optimized study schedule",
      icon: <FiZap className="stroke-current" />
    },
    {
      step: 4,
      title: "Daily Study",
      description: "Follow your plan with Pomodoro timer & AI help",
      icon: <FiCheckCircle className="stroke-current" />
    },
    {
      step: 5,
      title: "Track Progress",
      description: "See your completion rates and study analytics",
      icon: <FiBarChart2 className="stroke-current" />
    },
    {
      step: 6,
      title: "Adjust Schedule",
      description: "Reschedule missed topics automatically",
      icon: <FiRefreshCw className="stroke-current" />
    },
    {
      step: 7,
      title: "Exam Prep",
      description: "Crash course mode for final review",
      icon: <TfiRocket  className="stroke-current" />
    }
  ];

  const dailyFlows = [
    {
      time: "Morning",
      title: "Start Your Day",
      items: [
        "Check today's tasks",
        "Start Pomodoro timer",
        "Begin first topic"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      time: "Study Time",
      title: "Focused Learning",
      items: [
        "Ask AI for summaries",
        "Complete flashcards",
        "Mark tasks done"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      time: "Evening",
      title: "Wind Down",
      items: [
        "Review progress",
        "Adjust schedule",
        "Plan next day"
      ],
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Smart Study Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your learning process with our AI-powered study system
          </p>
        </motion.div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start">
            {steps.map((step, index) => (
              <StepCard 
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-10">
          {steps.map((step) => (
            <motion.div 
              key={step.step} 
              className="flex items-start gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.step * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl">
                  {step.icon}
                </div>
              </div>
              <div>
                <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium uppercase px-2 py-1 rounded-full mb-2">
                  Step {step.step}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Example User Flow */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Your Optimal Daily Routine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyFlows.map((flow, index) => (
              <DailyFlowCard
                key={index}
                time={flow.time}
                title={flow.title}
                items={flow.items}
                color={flow.color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Working;