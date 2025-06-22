const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

module.exports = db;