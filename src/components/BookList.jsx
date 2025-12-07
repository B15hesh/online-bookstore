import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBooks } from '../redux/actions';
import BookCard from './BookCard';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.cart.books);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch from Google Books API 
    axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20')
      .then(response => {
        // Map API data to the book structure
        const fetchedBooks = response.data.items.map(item => ({
          id: item.id,  // Unique ID from Google
          title: item.volumeInfo.title,  
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',  
          price: Math.floor(Math.random() * 50) + 10,  
          description: item.volumeInfo.description || 'No description available.',  
          image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image',  
        }));
        dispatch(setBooks(fetchedBooks));
      })
      .catch(error => {
        console.error('Error fetching books:', error);
        
        const mockBooks = [
          { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15, description: 'A classic novel.', image: 'https://via.placeholder.com/128x192?text=Book' },
          
        ];
        dispatch(setBooks(mockBooks));
      });
  }, [dispatch]);

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default BookList;