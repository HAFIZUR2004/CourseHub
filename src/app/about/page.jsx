"use client";
import React from "react";

const Aboutpage = () => {
  return (
    <div className="relative min-h-screen flex -mb-16 items-center justify-center overflow-hidden px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 animate-bgGradient -z-10"></div>

      {/* Main Card */}
      <div className="max-w-3xl bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 animate-fadeIn">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 
          bg-gradient-to-r from-yellow-300 via-white to-yellow-300 
          bg-clip-text text-transparent">
          About Kids Management
        </h1>

        <p className="text-lg text-white/90 leading-relaxed text-center">
          Welcome to our <span className="font-bold text-yellow-200">Kids Management Platform</span>,
          a smart digital solution designed to organize, manage and track
          children's learning, activities and daily progress.
          <br /><br />
          We make education fun, interactive, and structured for parents,
          teachers, and students.
          <br /><br />
          Our mission is to build a safer, smarter future for every child.
        </p>

        <div className="mt-8 text-center">
          <button
            className="
              px-8 py-3 rounded-full text-lg font-semibold text-white
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              shadow-xl hover:scale-105 transition-all duration-300
              animate-gradientMove
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
