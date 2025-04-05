// controllers/facultyController.js
const { processClassroomPhoto } = require('../utils/azureFaceAPI');
const Attendance = require('../models/Attendance');
const {Student} = require('../models/Student1');

exports.getStudentsAttendance = async (req, res) => {
  try {
    const { subject, semester, branch } = req.query;
    const attendance = await Attendance.find({ subject, semester, branch });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadClassroomPhoto = async (req, res) => {
  try {
    const detectedFaces = await processClassroomPhoto(req.file);
    res.json({ detectedFaces });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

