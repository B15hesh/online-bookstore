import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './components/BookDetails';
import CartPage from './pages/CartPage';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter base="/">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="book/:id" element={<BookDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;