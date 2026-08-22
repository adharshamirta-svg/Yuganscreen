const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Enable CORS so your Vite frontend (http://localhost:5173) can talk to this server
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Sample Product Data (Matching your frontend schema in Home.jsx & Products.jsx)
const products = [
  {
    id: '1',
    title: 'Mosquito Mesh Window Screen',
    price: '₹1,200 / sq.ft',
    img: 'https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_12_09_PM_opnrpo',
    desc: 'High-visibility fiberglass mesh engineered for optimal airflow and insect protection.',
    description: 'High-visibility fiberglass mesh engineered for optimal airflow and insect protection.',
    features: ['Fiberglass Mesh', 'Aluminum Frame', 'Weather Proof', '5 Year Warranty']
  },
  {
    id: '2',
    title: 'Pleated Mesh Door',
    price: '₹2,500 / sq.ft',
    img: 'https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_08_19_PM_kkhuay',
    desc: 'Smooth sliding zigzag pleated mesh doors ideal for large main entrances and balconies.',
    description: 'Smooth sliding zigzag pleated mesh doors ideal for large main entrances and balconies.',
    features: ['Smooth Sliding', 'Dust Resistant', 'Architectural Finish', 'Custom Color Options']
  },
  {
    id: '3',
    title: 'Balcony Invisible Grill',
    price: '₹1,800 / sq.ft',
    img: 'https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_40_01_PM_k8qdkm',
    desc: 'Stainless steel cable safety grills providing high structural security without obstructing view.',
    description: 'Stainless steel cable safety grills providing high structural security without obstructing view.',
    features: ['316 Stainless Steel', 'Child & Pet Safe', 'Zero View Obstruction', 'Rust Free']
  }
];

// --- API ENDPOINTS ---

// GET /api/products (Fetches product catalog for Home and Products pages)
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// POST /api/contact (Handles contact form submission from contact.jsx)
app.post('/api/contact', async (req, res) => {
    const {
        name,
        phone,
        email,
        location,
        service,
        message
    } = req.body;

    if (!name || !phone || !email || !location || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields.'
        });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Yugan Screens Enquiry - ${name}`,

            text: `
New Contact Form Submission

Name: ${name}
Phone: ${phone}
Email: ${email}
Location: ${location}
Service: ${service || 'General Enquiry'}

Message:
${message}

Received: ${new Date().toISOString()}
            `
        };

        await transporter.sendMail(mailOptions);

        console.log('📬 Email sent successfully:', {
            name,
            phone,
            email,
            location,
            service,
            message
        });

        return res.status(200).json({
            success: true,
            message: 'Your request has been received. We will contact you shortly!'
        });

    } catch (error) {
        console.error('❌ Email sending failed:', error);

        return res.status(500).json({
            success: false,
            message: 'Could not send your message. Please try again later.'
        });
    }
});
  const { name, phone, email, location, service, message } = req.body;

  if (!name || !phone || !email || !location || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields.'
    });
  }

  console.log('📬 New Inquiry Received:', {
    name,
    phone,
    email,
    location,
    service: service || 'General Enquiry',
    message,
    receivedAt: new Date().toISOString()
  });

  return res.status(200).json({
    success: true,
    message: 'Your request has been received. We will contact you shortly!'
  });
;
// Add this route in server.js before app.listen(...)
app.get('/', (req, res) => {
  res.send('🚀 Yugan Screens API is running live!');
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});