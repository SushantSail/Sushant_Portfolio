import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      {/* 404 Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-extrabold text-red-600 tracking-wider mb-4"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-400 mb-8 max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-red-600/40"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Netflix footer text style */}
      <div className="absolute bottom-8 text-gray-500 text-sm tracking-widest">
        PAGE <span className="text-red-600 font-bold">NOT FOUND</span>
      </div>
    </div>
  );
};

export default PageNotFound;