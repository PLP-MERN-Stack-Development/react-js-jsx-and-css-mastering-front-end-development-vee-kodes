import { NavLink } from "react-router";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons for mobile

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
     ${isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
        : "text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
     }`;

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-16">
        {/* Brand */}
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PLP Task Manager</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/tasks" className={linkClasses}>Tasks</NavLink>
          <NavLink to="/data" className={linkClasses}>API Data</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
          <div className="flex flex-col items-center space-y-2 py-4">
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkClasses}>Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about" className={linkClasses}>About</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/tasks" className={linkClasses}>Tasks</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/data" className={linkClasses}>API Data</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
