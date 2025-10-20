import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-auto shadow-inner transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-indigo-400">PLP Task Manager</span> - Built by Viola C. • PLP Africa MERN Stack
        </p>
        
      </div>
    </footer>
  );
}
