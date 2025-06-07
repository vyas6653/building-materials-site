const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const materialRoutes = require('./routes/materialRoutes');

const path = require('path');


dotenv.config();
const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({ origion:'http://localhost:3000'}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/materials', materialRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));