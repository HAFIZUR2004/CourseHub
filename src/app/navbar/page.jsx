"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile/nav dropdown
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  const navLinks = [
    { name: "Home", href: "/" },
    
    { name: "Course Library", href: "/item" },
    { name: "Add Course", href: "/products/addcourse" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer md:cursor-default"
              onClick={() => setMenuOpen(!menuOpen)} // Logo click toggles dropdown
            >
              <img src="/funnny.PNG" alt="Logo" className="h-12 w-12 rounded-lg" />
              <span className="hidden md:inline text-2xl font-bold text-white bg-clip-text">
                CourseHub
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium ml-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Profile or Auth Buttons */}
          <div className="flex items-center space-x-4 relative">
            {isLoggedIn && session.user.image ? (
              <div className="relative">
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="h-10 w-10 rounded-full cursor-pointer border-2 border-white shadow-md"
                  onClick={() => setProfileOpen(!profileOpen)}
                />
                <div
                  className={`absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 origin-top-right ${
                    profileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold text-gray-800">{session.user.name}</p>
                    <p className="text-sm text-gray-500">{session.user.email}</p>
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-medium transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown on Logo Click */}
      <div
        className={`md:hidden bg-gradient-to-b from-blue-500 to-purple-600 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-2 py-2 rounded hover:bg-yellow-300 hover:text-purple-700 transition-colors duration-300 font-medium text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
