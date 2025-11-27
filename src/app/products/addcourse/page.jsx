"use client";
import React, { useState } from "react";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description: desc,
          price,
          image: img,
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");
      const data = await res.json();
      alert(`Product added: ${data.title}`);

      setTitle("");
      setDesc("");
      setPrice("");
      setImg("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background Gradient + Animation */}
      <div className="absolute inset-0 animate-gradient-background -z-10"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-lg mb-10 animate-fadeIn">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-200 bg-white/90 backdrop-blur-md animate-fadeInUp"
      >
        <label className="block mb-5">
          <span className="text-gray-800 font-semibold">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product title"
            required
            className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 focus:ring-2 focus:ring-pink-400"
          />
        </label>

        <label className="block mb-5">
          <span className="text-gray-800 font-semibold">Description</span>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Short description"
            required
            className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100"
          />
        </label>

        <label className="block mb-5">
          <span className="text-gray-800 font-semibold">Price</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price in USD"
            required
            className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100"
          />
        </label>

        <label className="block mb-5">
          <span className="text-gray-800 font-semibold">Image URL</span>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="https://example.com/image.jpg"
            required
            className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 mt-6 rounded-2xl font-bold text-white shadow-md transition-transform 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105"
            }`}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background: linear-gradient(
            270deg,
            #8b5cf6,
            #ec4899,
            #3b82f6,
            #f472b6
          );
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
        .animate-fadeInUp {
          animation: fadeIn 0.8s ease forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default AddPage;
