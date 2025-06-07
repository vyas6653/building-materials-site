const express = require('express');
const multer = require("multer");
const router = express.Router();
const materialController = require("../controllers/materialController");
const authenticateToken = require('../middleware/authMiddleware');



const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"), false);
  }
};

const upload = multer({ storage: storage, fileFilter });

router.get("/", materialController.getMaterials);
router.post("/", authenticateToken, upload.single("image"), materialController.createMaterial);



module.exports = router;