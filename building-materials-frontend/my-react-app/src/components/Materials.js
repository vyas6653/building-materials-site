import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { getToken } from "../utils/auth";


function Materials() {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()){
        alert("you must be logged in to view materials.");
        navigate("/login");
        return;
    }
    API.get("/materials").then(res => setMaterials(res.data));
  }, [navigate]);
  
  <div className="container">
  <h1>Materials</h1>
 <ul>
  {materials.map((item) => (
    <li key={item.id} style={{ marginBottom: '20px' }}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      
      {/* Image Preview */}
     <img
  src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item.image_url}`}
  alt={item.name}
  style={{ width: '150px', height: 'auto', border: '1px solid #ccc' }}
/>
    </li>
  ))}
</ul>
</div>

 return (
<div className="material-list">
  {materials.map((item) => (
    <div key={item.id} className="material-card">
      <img src={item.image} alt={item.name} className="material-image" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </div>
  ))}
</div>

);
}

export default Materials;