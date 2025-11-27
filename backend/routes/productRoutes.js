// backend/routes/productRoutes.js
import express from "express";
import products from "../data/products.js";

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get product by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// Add a new product
router.post("/", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

export default router;
