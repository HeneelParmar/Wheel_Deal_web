import React, { useState } from 'react';
import axios from 'axios';

function Estimate() {
  const [formData, setFormData] = useState({
    type: '', year: '', km: '', make: '', model: '', condition: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/estimate', formData)
      .then(res => setEstimatedPrice(res.data.estimatedPrice))
      .catch(() => setEstimatedPrice('Error estimating price'));
  };

  return (
    <div className="container">
      <h2>Estimate Your Vehicle Price</h2>
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
        <button type="submit">Get Estimate</button>
      </form>
      {estimatedPrice !== null && (
        <p>Estimated Price: {typeof estimatedPrice === 'number' ? `₹${estimatedPrice}` : estimatedPrice}</p>
      )}
    </div>
  );
}

export default Estimate;