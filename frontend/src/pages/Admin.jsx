import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [vehicles, setVehicles] = useState([]);
  const [testDrives, setTestDrives] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/vehicles')
      .then(res => setVehicles(res.data))
      .catch(err => console.error('Error loading vehicles:', err));

    axios.get('http://localhost:5000/api/test-drive')
      .then(res => setTestDrives(res.data))
      .catch(err => console.error('Error loading test drive bookings:', err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteVehicle = (id) => {
    axios.delete(`http://localhost:5000/api/vehicles/${id}`)
      .then(() => fetchData())
      .catch(err => console.error('Error deleting vehicle:', err));
  };

  const deleteTestDrive = (id) => {
    axios.delete(`http://localhost:5000/api/test-drive/${id}`)
      .then(() => fetchData())
      .catch(err => console.error('Error deleting test drive:', err));
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      <section>
        <h3>Vehicles Listed</h3>
        {vehicles.length === 0 ? <p>No vehicles found.</p> : (
          <ul>
            {vehicles.map(v => (
              <li key={v._id}>
                {v.make} {v.model} ({v.year}) - {v.type} - Condition: {v.condition} - ₹{v.priceEstimate}
                <button onClick={() => deleteVehicle(v._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3>Test Drive Bookings</h3>
        {testDrives.length === 0 ? <p>No bookings found.</p> : (
          <ul>
            {testDrives.map(d => (
              <li key={d._id}>
                {d.name} | {d.vehicle} | {d.preferredDate} | {d.phone}
                <button onClick={() => deleteTestDrive(d._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Admin;