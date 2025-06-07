import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { saveToken } from "../utils/auth";

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/login", form);
    saveToken(res.data.token);
    onLogin();
    navigate("/");
  } catch (err) {
    console.error(err); 
    alert("Login failed");
  }
};

 return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
  }}>
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
        style={{ marginBottom: '10px', padding: '10px', width: '250px' }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        style={{ marginBottom: '15px', padding: '10px', width: '250px' }}
      />
      <button type="submit" className="btn" style={{ width: '150px' }}>Login</button>
    </form>
  </div>
);
}

export default Login;