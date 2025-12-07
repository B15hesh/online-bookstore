import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import Swal from 'sweetalert2';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
    Swal.fire('Added!', `${book.title} added to cart.`, 'success');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={book.image} alt={book.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>${book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
      <br />  {}
      <button onClick={handleAddToCart} style={{ marginTop: '10px' }}>Add to Cart</button>
    </div>
  );
};

export default BookCard;