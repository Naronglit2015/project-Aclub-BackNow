const db = require('../models/db')

exports.postTableReservations = async (req, res, next) => {
    const data = req.body;
    try {
      // สร้าง TableReservation ใหม่โดยใช้ข้อมูลจาก req.body
      const newTableReservation = await TableReservation.create(data);
  
      // ส่งข้อมูล TableReservation ที่สร้างใหม่กลับไปให้ Client
      res.status(201).json(newTableReservation);
    } catch (error) {
      // หากเกิดข้อผิดพลาดในการสร้าง TableReservation
      console.error('Error creating TableReservation:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };