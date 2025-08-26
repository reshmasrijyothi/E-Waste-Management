import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import external CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Later connect to backend API
    if (email && password) {
      navigate("/user-dashboard");
    } else {
      alert("Enter valid details");
    }
  };

  return (
    <div className="login-container">
      {/* App Title */}
      <h1 className="app-title">E-Waste Management</h1>

      {/* Login Card */}
      <div className="login-card">
        <h2 className="login-title">User Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login-links">
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
          <p>
            Admin? <Link to="/admin-login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;