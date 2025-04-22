import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Buy() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <div className="container">
      <h2>Buy a Vehicle</h2>
      {vehicles.length === 0 ? (
        <p>No vehicles listed for sale yet.</p>
      ) : (
        <div>
          {vehicles.map(vehicle => (
            <div key={vehicle._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <h3>{vehicle.make} {vehicle.model}</h3>
              <p>Type: {vehicle.type}</p>
              <p>Year: {vehicle.year}</p>
              <p>Kilometers Driven: {vehicle.km}</p>
              <p>Condition: {vehicle.condition}</p>
              <p>Estimated Price: ₹{vehicle.priceEstimate}</p>
              {vehicle.images && vehicle.images.length > 0 && (
                <img src={`http://localhost:5000/${vehicle.images[0]}`} alt="vehicle" style={{ width: '200px' }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Buy;