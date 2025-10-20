import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 
                    bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                    transition-colors duration-500">
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Welcome to Your Task Manager
        </h1>
        <p className="text-lg sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Manage your daily tasks efficiently, view live API data, and explore modern React 
          features - all wrapped in a beautiful, responsive interface.
        </p>
        <Link
          to="/tasks"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
                     hover:from-blue-700 hover:to-blue-600 text-white font-semibold 
                     rounded-xl shadow-lg transform hover:scale-105 
                     transition-all duration-300"
        >
          Get Started →
        </Link>
      </div>
    </div>
  );
}
