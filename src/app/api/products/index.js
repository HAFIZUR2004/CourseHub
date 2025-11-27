// app/api/products/index.js
import products from "../../../data/products.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
