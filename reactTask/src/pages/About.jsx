import React from "react";

export default function About() {
  return (
    <div className="p-6 sm:p-10 md:p-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          About This App
        </h2>
        <p className="text-lg sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          This project showcases modern React development — using hooks, context for theme
          management, and Tailwind CSS for responsive design. You can create and manage tasks,
          fetch public API data, and toggle between light and dark modes seamlessly.
        </p>
      </div>
    </div>
  );
}
