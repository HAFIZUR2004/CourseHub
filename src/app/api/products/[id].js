// app/api/products/[id].js
import products from "../../../data/products.js";

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find(p => p.id === Number(id));

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.status(200).json(product);
}
