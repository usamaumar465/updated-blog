import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <header className="new-header">
      <div className="nav-container">
        <div className="brand">
          <Link to="/" className="brand-name">📝 Bloggings</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
        </ul>
        {user ? (
          <div className="auth-section">
            <span className="username">👤 {user.name}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <div className="auth-section">
            <Link to="/login" className="auth-link">Login</Link>
            <Link to="/signup" className="auth-link">Signup</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
