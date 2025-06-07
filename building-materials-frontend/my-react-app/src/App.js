import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Materials from "./components/Materials";
import AddMaterial from "./components/AddMaterial";
import { isAuthenticated, logout } from "./utils/auth";
import './App.css';

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  return (
    <BrowserRouter>
    <nav style={{ textAlign: "center", marginBottom: "20px" }}>
  <Link to="/"><button className="btn">Materials</button></Link>
  <Link to="/add"><button className="btn">Add Material</button></Link>
  <Link to="/login"><button className="btn">Login</button></Link>
  <Link to="/register"><button className="btn">Register</button></Link>
  <button onClick={() => { logout(); setAuth(false); }} className="btn">Logout</button>
</nav>
      <Routes>
        <Route path="/" element={<Materials />} />
        <Route path="/add" element={auth ? <AddMaterial /> : <p>Please login</p>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={() => setAuth(true)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;