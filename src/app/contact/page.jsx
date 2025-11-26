"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contactpage = () => {
  return (
    <div className="relative min-h-screen flex items-center -mb-16 justify-center overflow-hidden px-6">

      {/* Background Animated Gradient */}
      <div className="absolute inset-0 animate-bgGradient -z-10"></div>

      {/* Contact Card */}
      <div className="max-w-3xl bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 animate-fadeIn">

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-6
        bg-gradient-to-r from-yellow-300 via-white to-yellow-300
        bg-clip-text text-transparent drop-shadow-lg"
        >
          Contact Us
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white/90 leading-relaxed text-center mb-8">
          Have questions about our Kids Management Platform?  
          We're here to help — feel free to reach out anytime!
        </p>

        {/* Contact Details */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            <Mail className="text-yellow-300" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p className="text-white/80 text-sm">support@kidsmanagement.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            <Phone className="text-yellow-300" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <p className="text-white/80 text-sm">+880 1234-567890</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            <MapPin className="text-yellow-300" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-white">Address</h3>
              <p className="text-white/80 text-sm">Dhaka, Bangladesh</p>
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button
            className="
              px-8 py-3 rounded-full text-lg font-semibold text-white
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              shadow-xl hover:scale-105 transition-all duration-300
              animate-gradientMove
            "
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
