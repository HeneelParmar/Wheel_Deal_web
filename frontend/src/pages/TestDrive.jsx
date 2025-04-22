import React, { useState } from 'react';
import axios from 'axios';

function TestDrive() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', vehicle: '', preferredDate: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/test-drive', formData)
      .then(() => setMessage('Test drive booked successfully!'))
      .catch(() => setMessage('Error booking test drive.'));
  };

  return (
    <div className="container">
      <h2>Book a Test Drive</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />
        <input name="vehicle" placeholder="Vehicle (Make + Model)" onChange={handleChange} required />
        <input name="preferredDate" type="date" onChange={handleChange} required />
        <button type="submit">Book Test Drive</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default TestDrive;