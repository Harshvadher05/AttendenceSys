// routes/attendanceRoutes.js
const express = require('express');
const { markAttendance, getAttendance } = require('../controllers/attendanceController');
const {  authenticateUser,authorizeFaculty,authorizeStudent,}= require('../middleware/authMiddleware');
const router = express.Router();

router.post('/mark', authenticateUser, markAttendance);
router.get('/:studentId', authenticateUser, getAttendance);

module.exports = router;

