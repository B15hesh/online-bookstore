import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);

  const headerStyle = {
    padding: '15px 30px',
    backgroundColor: '#0077cc',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    margin: '0 15px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const linkHover = (e) => {
    e.target.style.color = '#ffdd57';
  };

  const linkLeave = (e) => {
    e.target.style.color = '#fff';
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Online Bookstore</h1>
      <nav style={navStyle}>
        <Link 
          to="/" 
          style={linkStyle} 
          onMouseOver={linkHover} 
          onMouseOut={linkLeave}
        >
          Home
        </Link>
        <Link 
          to="/books" 
          style={linkStyle} 
          onMouseOver={linkHover} 
          onMouseOut={linkLeave}
        >
          Books
        </Link>
        <Link 
          to="/cart" 
          style={linkStyle} 
          onMouseOver={linkHover} 
          onMouseOut={linkLeave}
        >
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
