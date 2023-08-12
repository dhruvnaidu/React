import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
          {user ? (
            <Route path="/dashboard/*" element={<Dashboard user={user} />} />
          ) : (
            <Route path="/dashboard/*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

function Dashboard({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${user.role}-dashboard`} />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
