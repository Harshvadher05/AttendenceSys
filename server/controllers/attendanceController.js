// controllers/attendanceController.js
const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, facultyId, subject, branch, semester, lectureNumber, present } = req.body;
    const attendance = new Attendance({ studentId, facultyId, subject, branch, semester, lectureNumber, present });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ studentId: req.params.studentId });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

