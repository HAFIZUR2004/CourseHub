import React from "react";

async function fetchProducts() {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg">
          <h2 className="font-bold text-lg">{p.title}</h2>
          <p>{p.shortDesc}</p>
          <p className="font-semibold mt-2">Price: ${p.price}</p>
        </div>
      ))}
    </div>
  );
}
