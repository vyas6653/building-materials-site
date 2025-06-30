const db = require('../db');


exports.getMaterials = (req, res) => {
  db.query('SELECT * FROM materials', (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching materials' });

    const materials = results.map((item) => ({
      ...item,
      image: item.image_url || ''
    }));

    res.json(materials);
  });
};
exports.addMaterial = (req, res) => {
  const { name, price } = req.body;
  db.query('INSERT INTO materials (name, price) VALUES (?, ?)', [name, price], (err) => {
    if (err) return res.status(500).json({ message: 'Failed to add material' });
    res.status(201).json({ message: 'Material added successfully' });
  });
};

exports.createMaterial = (req, res) => {
  console.log("Uploaded File:", req.file);
  console.log("Form Body:", req.body);

  const { name, price } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !price || !image) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  const sql = "INSERT INTO materials (name, price, image_url) VALUES (?, ?, ?)";

  db.query(sql, [name, price, imageUrl], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Failed to add material" });
    }

    res.status(201).json({ message: "Material added successfully" });
  });
};