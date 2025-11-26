"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🟡 If checking session → show loading screen
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/login"); // ⬅️ redirect to your login page
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl animate-pulse">
        Checking authentication...
      </div>
    );
  }

  if (status === "unauthenticated") return null; // avoid flash

  // ===========================
  // ⭐ Your previous form code
  // ===========================
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
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
          shortDesc,
          price: Number(price),
          imgUrl,
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");
      const data = await res.json();
      alert(`Product added: ${data.title}`);

      setTitle("");
      setShortDesc("");
      setPrice("");
      setImgUrl("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center -mb-16 pb-5 pt-12 px-4 overflow-hidden">
      <div className="absolute inset-0 animate-gradient-background -z-10"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-lg mb-8 animate-fadeIn">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-gray-200 animate-fadeInUp"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(245,245,245,0.85))",
          backdropFilter: "blur(10px)",
        }}
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
          <span className="text-gray-800 font-semibold">Short Description</span>
          <input
            type="text"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
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
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
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
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            }`}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
      `}</style>
    </div>
  );
};

export default AddPage;
