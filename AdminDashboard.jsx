import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <nav>
          <ul>
            <li><a href="#">📥 Requests</a></li>
            <li><a href="#">📅 Scheduled Pickups</a></li>
            <li><a href="#">👥 Users</a></li>
            <li><a href="#">📊 Reports</a></li>
            <li><button onClick={handleLogout} className="logout-btn">🚪 Logout</button></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <h1>E-Waste Management - Admin Dashboard</h1>
          <div className="admin-profile">
            <span>👤 Admin</span>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats">
          <div className="stat-card pending">
            <h3>Pending Requests</h3>
            <p>12</p>
          </div>
          <div className="stat-card approved">
            <h3>Approved</h3>
            <p>8</p>
          </div>
          <div className="stat-card rejected">
            <h3>Rejected</h3>
            <p>3</p>
          </div>
          <div className="stat-card scheduled">
            <h3>Scheduled</h3>
            <p>5</p>
          </div>
        </section>

        {/* Requests Table */}
        <section className="table-section">
          <h2>Latest Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>User</th>
                <th>Device</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#101</td>
                <td>John Doe</td>
                <td>Laptop</td>
                <td>Working</td>
                <td><span className="status pending">Pending</span></td>
                <td>
                  <button className="action-btn approve">Approve</button>
                  <button className="action-btn reject">Reject</button>
                </td>
              </tr>
              <tr>
                <td>#102</td>
                <td>Alice Smith</td>
                <td>Mobile</td>
                <td>Damaged</td>
                <td><span className="status approved">Approved</span></td>
                <td>
                  <button className="action-btn schedule">Schedule</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;