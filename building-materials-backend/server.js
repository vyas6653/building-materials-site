const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const materialRoutes = require('./routes/materialRoutes');

const path = require('path');
const fs = require('fs'); // <-- ADD THIS LINE

dotenv.config();
const app = express();

// ✅ FORCE INCLUDE uploads folder (OPTION A FIX)
const uploadsPath = path.join(__dirname, 'uploads');
console.log('Uploads folder path:', uploadsPath);
try {
  const files = fs.readdirSync(uploadsPath);
  console.log('Files in uploads:', files);
} catch (err) {
  console.log('Uploads folder not found or unreadable:', err.message);
}

// 📂 Serve static files
app.use('/uploads', express.static(uploadsPath));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/materials', materialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});