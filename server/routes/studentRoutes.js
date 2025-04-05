// routes/studentRoutes.js
const express = require('express');
const { getStudentAttendance } = require('../controllers/studentController');
const {  authenticateUser,authorizeFaculty,authorizeStudent,}= require('../middleware/authMiddleware');
const router = express.Router();

router.get('/attendance', authenticateUser, getStudentAttendance);

module.exports = router;
