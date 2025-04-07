import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";
import SelectUser from "@/components/SelectUser";

function Searchbar() {
  const [showFilters, setShowFilters] = useState(false);
  const handleClick = () => setShowFilters(!showFilters);
  return (
    <div className="w-full flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md px-64">
      <div className="flex items-center space-x-2">
        <SelectUser />
      </div>
      <div className="flex space-between space-x-2">
        <div className="flex space-x-4 items-center">
          <div
            className={`flex space-x-4 transition-transform transition-opacity duration-500 ease-out transform ${
              showFilters
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0 pointer-events-none"
            }`}
          >
            <button className="text-gray-700 hover:underline">By Name</button>
            <button className="text-gray-700 hover:underline">By Date</button>
            <button className="text-gray-700 hover:underline">By Tag</button>
          </div>

          <button className="text-gray-700" onClick={handleClick}>
            <FaArrowUpWideShort />
          </button>
        </div>
        <div className="border rounded-lg relative">
          <input
            type="text"
            placeholder="search here..."
            className="px-4 py-2  w-full border-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
