import React from 'react'

const NotFoundPage = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-inter p-4 overflow-hidden">
      <div className="relative">
        {/* Abstract shapes for the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 filter blur-3xl animate-pulse-slow"></div>
        
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-20 filter blur-3xl animate-pulse-medium"></div>

        {/* The main content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-lg">404</h1>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-gray-300">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-full font-bold text-lg shadow-lg transform hover:scale-105"
          >
            Go Back Home
          </a>
        </div>
      </div>
      
      {/* Footer-like text at the bottom */}
      <div className="absolute bottom-4 text-xs text-gray-500">
        © 2023 All Rights Reserved.
      </div>
    </div>
)
}

export default NotFoundPage