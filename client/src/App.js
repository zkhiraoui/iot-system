// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({ name: '', type: '' });

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('/api/devices');
      setDevices(response.data);
    } catch (error) {
      console.error('Error fetching devices', error);
    }
  };

  const handleAddDevice = async () => {
    try {
      const response = await axios.post('/api/devices', newDevice);
      setDevices([...devices, response.data]);
      setNewDevice({ name: '', type: '' });
    } catch (error) {
      console.error('Error adding device', error);
    }
  };

  return (
    <div className="App">
      <h1>IoT System Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Device Name"
          value={newDevice.name}
          onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Device Type"
          value={newDevice.type}
          onChange={(e) => setNewDevice({ ...newDevice, type: e.target.value })}
        />
        <button onClick={handleAddDevice}>Add Device</button>
      </div>
      <h2>Connected Devices</h2>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            {device.name} ({device.type}) - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
