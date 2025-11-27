"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ItemListPage = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl animate-pulse">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient + Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-background -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center pt-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 animate-fadeIn">
          Course Library
        </h1>
        <p className="text-white text-lg animate-fadeIn delay-200">
          Browse all items — use the search to find what you need.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto my-8">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full pl-6 pr-5 py-3 shadow-lg border border-white/30 bg-white/20 backdrop-blur-md placeholder-white outline-none focus:ring-2 focus:ring-pink-400 text-white transition duration-300"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {filteredItems.length === 0 && (
          <p className="col-span-full text-center text-white text-xl">
            No items found for "{searchTerm}"
          </p>
        )}

        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            <p className="text-sm text-gray-700 mt-1 line-clamp-2">{item.description}</p>
            <p className="text-md font-medium text-gray-800 mt-2">Price: {item.price}</p>

           <button
  onClick={() => router.push(`/details/${item.id}`)}
  className="mt-4 w-full py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors duration-300"
>
  View Details
</button>

          </div>
        ))}
      </div>

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

export default ItemListPage;