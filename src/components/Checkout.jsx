import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire('Success!', 'Order placed successfully!', 'success');
    // Reset cart or redirect here (e.g., use history.push('/'))
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
      <textarea placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;