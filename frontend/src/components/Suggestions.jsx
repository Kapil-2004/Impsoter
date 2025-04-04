import React from "react";
import { FaLightbulb } from "react-icons/fa";

export default function Suggestion() {
  return (
    <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaLightbulb className="text-yellow-500 text-xl" />
        <h1 className="text-xl font-bold text-gray-900">
          Suggestions for Your New Post
        </h1>
      </div>

      {/* Suggestions List */}
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Review of any online course
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Some incident that happened today in college
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          About any club
        </li>
      </ul>
    </div>
  );
}
