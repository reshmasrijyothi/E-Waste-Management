import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Later connect to backend API
    if (email === "admin@ewaste.com" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div className="admin-login-container">
      {/* App Title */}
      <h1 className="app-title">E-Waste Management - Admin</h1>

      {/* Login Card */}
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Login</h2>
        <form onSubmit={handleAdminLogin} className="admin-login-form">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="admin-login-input"
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="admin-login-input"
          />
          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>
        <div className="admin-login-links">
          <p>
            Not an admin? <Link to="/login">Go back to User Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;