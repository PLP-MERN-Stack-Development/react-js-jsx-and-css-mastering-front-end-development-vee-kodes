import React, { useEffect, useState } from "react";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
        setFilteredData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 sm:p-10 md:p-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Explore API Data</h2>
        <p className="text-lg sm:text-base text-gray-600 dark:text-gray-400 mb-8">
          Browse public API data (from JSONPlaceholder) below  — complete with search, pagination, and smooth transitions.
        </p>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>

      {/* States */}
      {loading && <p className="text-blue-500 text-center">Loading data...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Data Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((post) => (
            <div
              key={post.id}
              className="p-5 bg-white dark:bg-gray-800 border border-gray-200 
                         dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg 
                         transition-transform duration-300 hover:scale-105">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && !error && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium 
                       disabled:bg-gray-400 hover:bg-blue-700 transition">Prev
          </button>
            <span className="text-gray-700 dark:text-gray-300">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium 
                       disabled:bg-gray-400 hover:bg-blue-700 transition">Next
          </button>
        </div>
      )}
    </div>
  );
}
