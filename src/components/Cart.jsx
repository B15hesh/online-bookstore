import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    Swal.fire('Removed!', 'Item removed from cart.', 'info');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cart</h1>
      {cartItems.length === 0 ? <p>Cart is empty.</p> : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '80px', height: 'auto', marginRight: '15px' }} />  {/* Added image display */}
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <p>Total: ${total}</p>
          <Link to="/checkout"><button>Checkout</button></Link>
        </>
      )}
    </div>
  );
};

export default Cart;