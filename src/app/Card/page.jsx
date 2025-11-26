"use client";
import React, { useState, useEffect } from "react";

const Cardpage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.slice(0, 4)); // শুধু ৪টা দেখাবে
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-center">Loading cards...</div>;

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h1 className="text-2xl font-bold mb-6">Cards from Backend</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl shadow p-4">
            <img
              className="rounded-lg h-40 w-full object-cover"
              src={card.image}
              alt={card.title}
            />
            <h2 className="text-lg font-semibold mt-3">{card.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{card.description}</p>
            <p className="text-sm font-semibold mt-1">Price: {card.price}</p>

            <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpage;
