import express from "express";
import products from "../data/products.js";

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Add a new product
router.post("/", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

export default router;
