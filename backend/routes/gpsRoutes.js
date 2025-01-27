const express = require('express');
const router = express.Router();

// Model
const GpsData = require('../models/GpsData');

// POST: เพิ่มข้อมูล GPS
router.post('/', async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const newGpsData = new GpsData({ lat, lng });
    await newGpsData.save();
    res.status(201).json(newGpsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: ดึงข้อมูล GPS ทั้งหมด
router.get('/', async (req, res) => {
  try {
    const gpsData = await GpsData.find();
    res.status(200).json(gpsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
