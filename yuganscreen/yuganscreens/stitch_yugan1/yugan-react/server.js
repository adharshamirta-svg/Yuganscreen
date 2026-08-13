import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let isMongoConnected = false;

// Default Products Array for fallback
const defaultProducts = [
  {
    title: "Window Mosquito Net",
    description: "Premium fiberglass mosquito mesh with aluminium frame offering maximum airflow and insect protection.",
    desc: "High-quality fiberglass mesh with excellent airflow and insect protection.",
    price: "₹220 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_12_09_PM_opnrpo",
    features: [
      "Premium Aluminium Frame",
      "Easy Maintenance",
      "5 Year Warranty",
      "Invisible Mesh"
    ]
  },
  {
    title: "Door Mosquito Screen",
    description: "Heavy-duty magnetic door screen designed for smooth opening and long-lasting durability.",
    desc: "Elegant magnetic and hinged door screens for daily convenience.",
    price: "₹250 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_17_05_PM_krktxg",
    features: [
      "Magnetic Closing",
      "Heavy Duty Mesh",
      "Weather Resistant",
      "Premium Finish"
    ]
  },
  {
    title: "Pleated Mesh Door",
    description: "Luxury pleated retractable mesh door suitable for balconies and large openings.",
    desc: "Smooth sliding pleated system designed for modern interiors.",
    price: "₹320 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_08_19_PM_kkhuay",
    features: [
      "Retractable Design",
      "Italian Mesh",
      "Smooth Sliding",
      "Elegant Finish"
    ]
  },
  {
    title: "Sliding Screen",
    description: "Perfect for balconies and large sliding doors with effortless movement.",
    desc: "Perfect for balconies and large sliding doors with effortless movement.",
    price: "₹290 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_20_42_PM_ifsgmc",
    features: [
      "Smooth Track",
      "Noise Free",
      "Premium Rollers",
      "Long Life"
    ]
  },
  {
    title: "Invisible Grill",
    description: "Premium stainless steel safety grills with uninterrupted views.",
    desc: "Premium stainless steel safety grills with uninterrupted views.",
    price: "₹750 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_40_01_PM_k8qdkm",
    features: [
      "316 Stainless Steel",
      "Child Safety",
      "Rust Free",
      "10 Year Warranty"
    ]
  },
  {
    title: "Balcony Safety Net",
    description: "Strong HDPE safety nets for balconies and open spaces.",
    desc: "Strong HDPE safety nets for balconies and open spaces.",
    price: "₹65 / sq.ft",
    img: "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_04_46_PM_invtfg",
    features: [
      "HDPE Net",
      "UV Protected",
      "Bird Protection",
      "Weather Resistant"
    ]
  }
];

// Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
  features: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// Seed Products function
const seedProducts = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(defaultProducts);
      console.log('Database seeded with default products successfully!');
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

// Database connection & seed
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/yugan-screens';
mongoose.connect(mongoUri)
  .then(async () => {
    console.log('Connected to MongoDB successfully');
    isMongoConnected = true;
    await seedProducts();
  })
  .catch((err) => {
    console.warn('MongoDB connection failed. Backend running in LOCAL FILE FALLBACK mode.', err.message);
    isMongoConnected = false;
  });

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, location, service, message } = req.body;

    if (!name || !phone || !email || !location || !message) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
    }

    const payload = {
      name,
      phone,
      email,
      location,
      service: service || 'Other / General Enquiry',
      message,
      createdAt: new Date()
    };

    if (isMongoConnected) {
      const newContact = new Contact(payload);
      await newContact.save();
    } else {
      // Local file fallback
      const filePath = path.resolve('submissions.json');
      let submissions = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, 'utf8');
          submissions = JSON.parse(raw);
        } catch (e) {
          submissions = [];
        }
      }
      submissions.push(payload);
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');
      console.log('Saved submission to local JSON file:', filePath);
    }

    return res.status(200).json({ success: true, message: 'Contact request saved successfully!' });
  } catch (error) {
    console.error('Error saving contact request:', error);
    return res.status(500).json({ success: false, message: 'Server error, please try again later.' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    if (isMongoConnected) {
      const products = await Product.find({}).sort({ createdAt: 1 });
      return res.status(200).json(products);
    } else {
      // Fallback mode serving default products
      return res.status(200).json(defaultProducts);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ message: 'Server error fetching products.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
