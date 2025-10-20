// To make Navbar and Footer appear on every page

import React from "react";
import Navbar from "./ui/Navbar.jsx";
import Footer from "./ui/Footer.jsx";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main
        className="flex-grow 
                   bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
                   dark:from-gray-900 dark:via-indigo-950 dark:to-gray-800 
                   transition-all duration-700 ease-in-out">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10"><Outlet /></div>
      </main>

      <Footer />
    </div>
  );
};
