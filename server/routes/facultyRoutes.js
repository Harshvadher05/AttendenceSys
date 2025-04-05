// routes/facultyRoutes.js
const express = require('express');
const { getStudentsAttendance, uploadClassroomPhoto } = require('../controllers/facultyController');
const {  authenticateUser,authorizeFaculty,authorizeStudent,}= require('../middleware/authMiddleware');
const router = express.Router();

router.get('/attendance', authenticateUser, getStudentsAttendance);
router.post('/upload-photo', authenticateUser, uploadClassroomPhoto);

module.exports = router;

