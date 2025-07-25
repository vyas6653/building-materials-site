﻿# Building Materials Website
# building-materials-fullstack
# 🏗 Building Materials Management System

A full-stack web application developed during my internship to manage building materials like cement, steel, etc. It features user authentication, image upload, and live preview functionality.

---

## 🌐 Live Demo

- 🔗 *Frontend*: [https://building-materials-site-1.onrender.com](https://building-materials-site-1.onrender.com)
- 🔗 *Backend API*: [https://building-materials-site-dlwn.onrender.com](https://building-materials-site-dlwn.onrender.com)

---

## 🛠 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Frontend     | React.js, Axios, CSS      |
| Backend      | Node.js, Express.js       |
| Database     | MySQL (hosted on Railway) |
| Hosting      | Render (Frontend + Backend) |
| Others       | JWT Auth, dotenv, CORS    |

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🏗 Add, View, Edit, Delete Materials
- 🖼 Upload & Preview Images (stored in /uploads)
- ✅ Protected Routes with JWT
- 🌐 Deployed full-stack project on Render

---

## 📂 Folder Structure

📦 building-materials-site/
├── 📁 backend/                    # Express.js backend
│   ├── 📁 routes/                 # Route files (authRoutes.js, materialRoutes.js)
│   ├── 📁 uploads/                # Uploaded image files
│   ├── .env                      # Backend environment variables (PORT, FRONTEND_URL)
│   ├── server.js                 # Main Express server file
│   └── package.json              # Backend dependencies
│
├── 📁 frontend/                   # React.js frontend
│   ├── 📁 public/                 # Public files (index.html, favicon)
│   ├── 📁 src/                    # React source code
│   │   ├── 📁 components/         # Components (e.g. Materials.js)
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React entry point
│   │   └── API.js                # Axios base configuration
│   ├── .env                      # Frontend env (REACT_APP_API_BASE_URL)
│   └── package.json              # Frontend dependencies
│
├── README.md                     # Project overview and instructions
└── .gitignore                    # Files to ignore in Git
