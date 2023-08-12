import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your login logic here
    // For this example, assume 'user' and 'user123' for user role
    // and 'admin' and 'admin123' for admin role
    if (
      (username === 'user' && password === 'user123') ||
      (username === 'admin' && password === 'admin123')
    ) {
      const user = {
        username,
        role: username === 'admin' ? 'admin' : 'user',
      };
      handleLogin(user);

      // Redirect to the respective dashboard
      if (user.role === 'admin') {
        navigate('src/AdminDashboard.js');
      } else {
        navigate('/UserDashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
