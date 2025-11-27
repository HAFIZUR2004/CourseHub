"use client"; // ✅ make it client-side

import React, { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg">
          <h2 className="font-bold text-lg">{p.title}</h2>
          <p>{p.description}</p>
          <p className="font-semibold mt-2">Price: {p.price}</p>
        </div>
      ))}
    </div>
  );
}
