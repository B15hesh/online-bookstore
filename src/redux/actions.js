export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_BOOKS = 'SET_BOOKS';

export const addToCart = (book) => ({ type: ADD_TO_CART, payload: book });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const setBooks = (books) => ({ type: SET_BOOKS, payload: books });