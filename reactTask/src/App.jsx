import React from 'react';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router';
import {useTheme} from './context/ThemeContext.jsx';


// layout & pages
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Tasks from './pages/Tasks.jsx';
import ApiData from './pages/ApiData.jsx';

// Define routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/tasks", element: <Tasks />},
      {path: "/data", element: <ApiData />},
      {
        path: "*",
        element: <h2 className="text-center text-red-500 mt-10">404 - Page Not Found</h2>,
      }
    ],
  },
]);

export default function App() {
  const {darkMode} = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <RouterProvider router={router} />
    </div>
  )
};

  

   


