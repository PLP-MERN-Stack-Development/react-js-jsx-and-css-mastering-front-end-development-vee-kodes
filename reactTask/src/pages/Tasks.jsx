import React from "react";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 py-10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Task Manager
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Organize your daily to-dos — add, track, and complete tasks effortlessly with real-time updates and theme switching.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <TaskManager />
      </div>
    </div>
  );
};
