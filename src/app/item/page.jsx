"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const Itemlistpage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingItems, setLoadingItems] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  // Fetch items only if authenticated
  useEffect(() => {
    if (status === "authenticated") {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoadingItems(false);
        })
        .catch(() => {
          setFetchError(true);
          setLoadingItems(false);
        });
    }
  }, [status]);

  // Show loading while checking session or fetching items
  if (status === "loading" || loadingItems) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl animate-pulse">
        Loading...
      </div>
    );
  }

  // Return null if unauthenticated (redirect already happens)
  if (status === "unauthenticated") return null;

  // Filtered items for search
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-background -z-10"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center pt-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 animate-fadeIn">
          Course Library
        </h1>
        <p className="text-white text-lg animate-fadeIn delay-200">
          Browse all items — use the search to find what you need.
        </p>
      </div>

      {/* Search */}
      <div className="relative z-10 max-w-3xl mx-auto my-8">
        <div className="relative flex items-center">
          <Search className="absolute left-5 text-white" size={22} />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full pl-14 pr-5 py-3 shadow-lg border border-white/30 bg-white/20 backdrop-blur-md placeholder-white outline-none focus:ring-2 focus:ring-pink-400 text-white transition duration-300"
          />
        </div>
      </div>

      {/* Items */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {fetchError && (
          <p className="col-span-full text-center text-white text-xl">
            Failed to fetch items. Please try again later.
          </p>
        )}

        {!fetchError && filteredItems.length === 0 && (
          <p className="col-span-full text-center text-white text-xl">
            No items found for "{searchTerm}"
          </p>
        )}

        {!fetchError &&
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-sm text-gray-700 mt-1 line-clamp-2">{item.description}</p>
              <p className="text-md font-medium text-gray-800 mt-2">Price: {item.price}</p>
            </div>
          ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background-size: 600% 600%;
          animation: gradientMove 20s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Itemlistpage;
