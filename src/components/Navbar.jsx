import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">
            P
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            Prep<span className="text-blue-600">Track</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="#dashboard"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#questions"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Questions
          </a>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-gray-500">
            Stay consistent!
          </span>
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
            R
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;