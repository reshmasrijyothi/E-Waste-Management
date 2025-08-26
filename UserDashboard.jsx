import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session (later add actual auth logic)
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <header className="dashboard-header">
        <h1 className="app-title">E-Waste Management</h1>
        <nav className="dashboard-nav">
          <Link to="/user-dashboard">Home</Link>
          <Link to="/submit-request">Submit Request</Link>
          <Link to="/my-requests">My Requests</Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <h2>Welcome, User 👋</h2>
        <p>Manage your e-waste requests from here.</p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Submit New Request</h3>
            <p>Dispose your electronic waste easily.</p>
            <Link to="/submit-request" className="card-btn">
              Submit Request
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>My Requests</h3>
            <p>Track status of your past submissions.</p>
            <Link to="/my-requests" className="card-btn">
              View Requests
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Update your details and preferences.</p>
            <Link to="/profile" className="card-btn">
              Go to Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;