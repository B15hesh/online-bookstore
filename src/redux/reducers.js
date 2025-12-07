import { ADD_TO_CART, REMOVE_FROM_CART, SET_BOOKS } from './actions';

const initialState = {
  items: [],  // Cart items
  books: [],  // Fetched books
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default cartReducer;