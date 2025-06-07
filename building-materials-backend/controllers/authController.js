require("dotenv").config();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in .env");
  process.exit(1); // Stop the server
}

exports.register = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
      if (err) return res.status(500).json({ message: 'User registration failed' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log("Recived login:", username,password);

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    console.log("DB Error:",err);
    console.log("DB Results:",results);
    if (err || results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      console.log("Compare Error:",err);
      console.log("Password match:",isMatch);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ userId: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};