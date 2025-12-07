import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '30px 20px',
    backgroundColor: '#0077cc',
    color: '#fff',
    textAlign: 'center',
    marginTop: '50px',
  };

  const linkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const linkHover = (e) => {
    e.target.style.color = '#ffdd57';
  };

  const socialStyle = {
    margin: '15px 0',
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const iconHover = (e) => {
    e.target.style.color = '#ffdd57';
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="/" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkHover}>Home</a>
        <a href="/books" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkHover}>Books</a>
        <a href="/cart" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkHover}>Cart</a>
      </div>

      <div style={socialStyle}>
        <span style={iconStyle} onMouseOver={iconHover} onMouseOut={iconHover}>🌐</span>
        <span style={iconStyle} onMouseOver={iconHover} onMouseOut={iconHover}>📘</span>
        <span style={iconStyle} onMouseOver={iconHover} onMouseOut={iconHover}>🐦</span>
      </div>

      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        &copy; 2023 Online Bookstore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
