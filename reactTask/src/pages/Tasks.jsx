import React from "react";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <div className="p-6 sm:p-10 md:p-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Task Manager
        </h2>
        <p className="text-lg sm:text-base text-gray-600 dark:text-gray-400 mb-8">
          Organize your daily to-dos - add, track, and complete tasks effortlessly with real-time updates and theme switching.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <TaskManager />
      </div>
    </div>
  );
}
