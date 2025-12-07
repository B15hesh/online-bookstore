import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector(state => state.cart.books);
  const book = books.find(b => b.id === id);  

  if (!book) return <p style={{ padding: '20px' }}>Book not found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <img src={book.image} alt={book.title} style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />  {/* Display book image */}
      <h1>{book.title}</h1>
      <p>By {book.author}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
    </div>
  );
};

export default BookDetails;