import React, { useState } from 'react';
import axios from 'axios';

function Sell() {
  const [formData, setFormData] = useState({
    type: '', year: '', km: '', make: '', model: '', condition: '', images: []
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (key === 'images') {
        Array.from(formData.images).forEach(file => data.append('images', file));
      } else {
        data.append(key, formData[key]);
      }
    }

    axios.post('http://localhost:5000/api/vehicles', data)
      .then(() => setMessage('Vehicle listed successfully!'))
      .catch(() => setMessage('Error listing vehicle.'));
  };

  return (
    <div className="container">
      <h2>Sell Your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input name="type" placeholder="Car or Bike" onChange={handleChange} required />
        <input name="year" type="number" placeholder="Year" onChange={handleChange} required />
        <input name="km" type="number" placeholder="Kilometers Driven" onChange={handleChange} required />
        <input name="make" placeholder="Make" onChange={handleChange} required />
        <input name="model" placeholder="Model" onChange={handleChange} required />
        <select name="condition" onChange={handleChange} required>
          <option value="">Select Condition</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="OK">OK</option>
          <option value="Not Good">Not Good</option>
        </select>
        <input type="file" multiple onChange={handleFileChange} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Sell;