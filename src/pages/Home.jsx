import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    padding: '20px',
    textAlign: 'center',
    backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0077cc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to the Online Bookstore</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        Discover your next favorite book and embark on a journey of imagination and knowledge.
      </p>
      <Link to="/books">
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#005fa3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0077cc')}
        >
          Browse Books
        </button>
      </Link>
    </div>
  );
};

export default Home;
