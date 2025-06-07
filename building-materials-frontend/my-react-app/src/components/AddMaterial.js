import React, { useState } from "react";
import API from "../api/api";
import { getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function AddMaterial() {
  const [form, setForm] = useState({ name: "", price: "" ,image:null });
  const navigate = useNavigate();

  const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "300px",
  margin: "auto"
};
  // 🔐 Check if user is logged in
  if (!getToken()) {
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffe0e0",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#b30000",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          🚫 Please log in to access this page.
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("price", form.price);
  formData.append("image", form.image);

  try {
    await API.post("/materials", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    alert("✅ Material added successfully!");
    setForm({ name: "", price: "", image: null });
    navigate("/materials");
  } catch (error) {
    console.error("Error adding material:", error);
    alert("❌ Failed to add material.");
  }
};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        flexDirection: "column",
      }}
    >
     <form onSubmit={handleSubmit} style={formStyle}>
  <h2>Add Material</h2>

  <input
    type="text"
    placeholder="Material Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />
  
  <input
    type="text"
    placeholder="Price"
    value={form.price}
    onChange={(e) => setForm({ ...form, price: e.target.value })}
  />

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
  />

{form.image && (
  <img
    src={URL.createObjectURL(form.image)}
    alt="Preview"
    style={{ width: "100px", marginTop: "10px" }}
  />
)}
  <button type="submit">Add</button>

</form>
    </div>
  );
}

export default AddMaterial;