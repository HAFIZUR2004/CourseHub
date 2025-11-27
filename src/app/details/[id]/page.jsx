// app/details/[id]/page.jsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  // Fetch product details
  useEffect(() => {
    if (status !== "authenticated") return;

    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id, status]);

  if (status === "loading")
    return (
      <div className="min-h-screen flex items-center justify-center text-xl animate-pulse">
        Checking authentication...
      </div>
    );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl animate-pulse">
        Loading product...
      </div>
    );

  if (error || !item)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-xl text-red-500">
        <p>Product not found</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-6 flex flex-col items-center">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-white/70 rounded hover:bg-white/90 shadow"
      >
        ← Back
      </button>

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center animate-fadeIn">
        {item.image && (
          <img
            src={item.image || item.imgUrl}
            alt={item.title}
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h1>
        <p className="text-gray-700 mb-4">{item.description || item.shortDesc}</p>
        <div className="flex gap-6 text-gray-900 font-medium text-lg">
          <p>Price: {item.price}</p>
          {item.category && <p>Category: {item.category}</p>}
        </div>
      </div>

      <style jsx>{`
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
}
