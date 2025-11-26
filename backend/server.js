import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Root route
app.get("/", (req, res) => res.send("Backend server চলছে..."));

app.listen(PORT, () => console.log(`Backend server ${PORT} পোর্টে রান হচ্ছে`));
