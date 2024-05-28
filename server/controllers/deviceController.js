const Device = require('../models/Device');
const axios = require('axios');
const config = require('../config');

exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving devices', error });
  }
};

exports.addDevice = async (req, res) => {
  const { name, type } = req.body;
  try {
    const newDevice = new Device({ name, type });
    await newDevice.save();
    res.status(201).json(newDevice);
  } catch (error) {
    res.status(500).json({ message: 'Error adding device', error });
  }
};

exports.getDevice = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: 'Device not found' });
    res.json(device);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving device', error });
  }
};

exports.updateDevice = async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDevice) return res.status(404).json({ message: 'Device not found' });
    res.json(updatedDevice);
  } catch (error) {
    res.status(500).json({ message: 'Error updating device', error });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    const deletedDevice = await Device.findByIdAndDelete(req.params.id);
    if (!deletedDevice) return res.status(404).json({ message: 'Device not found' });
    res.json({ message: 'Device deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting device', error });
  }
};
