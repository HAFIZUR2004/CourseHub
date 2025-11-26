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

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  // Fetch product details
  useEffect(() => {
    if (status !== "authenticated") return;
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id, status]);

  if (status === "loading") return <p>Checking authentication...</p>;
  if (loading) return <p>Loading product...</p>;
  if (!item) return <p>Product not found</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex gap-4 text-gray-800">
          <p><strong>Price:</strong> {item.price}</p>
          {item.category && <p><strong>Category:</strong> {item.category}</p>}
        </div>
      </div>
    </div>
  );
}
