"use client";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="relative overflow-hidden mt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-background -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold mb-4">CourseManager</h3>
            <p className="text-white/80">
              A simple platform to manage and explore courses easily. Learn, Add, and Manage courses with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-200">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/courses" className="hover:text-yellow-300 transition-colors duration-300">Courses</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="animate-fadeInUp delay-400">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-300 transition-colors duration-300">Facebook</Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors duration-300">Twitter</Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors duration-300">Instagram</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/30 pt-4 text-center text-white/70 animate-fadeInUp delay-500">
          &copy; {new Date().getFullYear()} CourseManager. All rights reserved.
        </div>
      </div>

      {/* Tailwind CSS Keyframes for Gradient Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background-size: 300% 300%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default FooterPage;
