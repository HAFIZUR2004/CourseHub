import express from "express";
const router = express.Router();

// JSON Data (10 old products) - ✅ URLs fixed
let products = [
  {
    id: 1,
    title: "Python for Kids",
    description: "Learn the basics of Python programming in a fun and interactive way.",
    price: "$49",
    category: "Programming",
    image: "https://i.ibb.co/rR83VQ5T/rubaitul-azad-ZIPFteu-R8k-unsplash.jpg"
  },
  {
    id: 2,
    title: "Scratch Adventures",
    description: "Interactive game-based learning with Scratch for young coders.",
    price: "$39",
    category: "Programming",
    image: "https://i.ibb.co/XrMXm4Wn/images-1.png"
  },
  {
    id: 3,
    title: "Robotics Fun",
    description: "Build and code your own mini robots while having fun.",
    price: "$59",
    category: "STEM",
    image: "https://i.ibb.co/60v4RGPt/jason-leung-j6-QZXBVys-E8-unsplash.jpg"
  },
  {
    id: 4,
    title: "Web Design Basics",
    description: "Learn how to make simple websites using HTML & CSS.",
    price: "$45",
    category: "Design",
    image: "https://i.ibb.co/20fCD9TY/web-design.jpg"
  },
  {
    id: 5,
    title: "Game Development",
    description: "Create your first fun game using easy-to-learn tools.",
    price: "$55",
    category: "Programming",
    image: "https://i.ibb.co/Y71ZTFns/pro-cyber-sport-gamer-relaxing-playing-video-games-using-vr-headset-late-night-virtual-shooter-game.jpg"
  },
  {
    id: 6,
    title: "JavaScript for Kids",
    description: "Learn JavaScript basics through fun mini-projects.",
    price: "$49",
    category: "Programming",
    image: "https://i.ibb.co/vvRDD00z/growtika-qaed-Ply-Uro-unsplash.jpg"
  },
  {
    id: 7,
    title: "Creative Coding",
    description: "Use code to create art and interactive animations.",
    price: "$50",
    category: "Design",
    image: "https://i.ibb.co/BHtnk15d/person-playing-3d-video-games-device.jpg"
  },
  {
    id: 8,
    title: "Math & Logic Games",
    description: "Boost logical thinking and problem-solving skills.",
    price: "$35",
    category: "STEM",
    image: "https://i.ibb.co/ZRrMBHsT/vd-photography-k0ffq4-Bdxm0-unsplash.jpg"
  },
  {
    id: 9,
    title: "App Development Basics",
    description: "Learn how to design and build simple mobile apps.",
    price: "$60",
    category: "Programming",
    image: "https://i.ibb.co/cchTCCDt/moritz-kindler-MEh-It-GTIb-WA-unsplash.jpg"
  },
  {
    id: 10,
    title: "Digital Storytelling",
    description: "Create interactive stories using code and animation.",
    price: "$42",
    category: "Design",
    image: "https://i.ibb.co/wZfJj41g/still-life-books-versus-technology.jpg"
  }
];

// =========================
// 👉 GET all products
// =========================
router.get("/", (req, res) => {
  res.json(products);
});

// =========================
// 👉 GET product by ID
// =========================
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === +req.params.id);
  if (!product)
    return res.status(404).json({ error: "Product not found" });

  res.json(product);
});

// =========================
// 👉 POST: ADD NEW PRODUCT
// =========================
router.post("/", (req, res) => {
  const { title, shortDesc, price, imgUrl } = req.body;

  if (!title || !shortDesc || !price || !imgUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newProduct = {
    id: products.length + 1,
    title,
    description: shortDesc,
    price: `$${price}`,
    category: "Programming", // চাইলে UI থেকে পাঠাতে পারো
    image: imgUrl
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

export default router;
