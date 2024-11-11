import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-container">
            <h1>CarShop</h1>
            <span className="logo-premium">Premium</span>
          </div>
        </Link>

        <form className="search-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar por marca ou modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
            Buscar
          </button>
        </form>

        <nav className="header-nav">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>
      </div>
    </header>
  );
} 