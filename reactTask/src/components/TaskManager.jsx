import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import { useTheme } from "../context/ThemeContext";

// Custom hook for localStorage task management
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

const TaskManager = () => {
  const {tasks, addTask, toggleTask, deleteTask} = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const {darkMode, toggleTheme} = useTheme();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <>
      <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-xl p-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-6 text-center">Task Board</h2>

          {/* Task input form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-grow px-4 py-2 border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button type="submit" variant="primary">
                Add Task
              </Button>
            </div>
          </form>

          {/* Filter buttons */}
          <div className="flex gap-2 mb-4 justify-center">
            <Button variant={filter === "all" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant={filter === "active" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("active")}>
              Active
            </Button>
            <Button
              variant={filter === "completed" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setFilter("completed")}
            >
              Completed
            </Button>
          </div>

          {/* Task list */}
          <Card title="Tasks" className="bg-gray-50 dark:bg-gray-900">
            <ul className="space-y-2">
              {filteredTasks.length === 0 ? (
                <li className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks found</li>
              ) : (
                filteredTasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between p-3 border rounded-lg 
                               hover:bg-gray-50 dark:hover:bg-gray-700 
                               dark:border-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span
                        className={`${
                          task.completed
                            ? "line-through text-gray-500 dark:text-gray-400"
                            : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                      Delete
                    </Button>
                  </li>
                ))
              )}
            </ul>
          </Card>

          {/* Task stats */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>{tasks.filter((task) => !task.completed).length} tasks remaining</p>
          </div>
          
        </Card>
      </div>
    </>
  );
};


export default TaskManager;
