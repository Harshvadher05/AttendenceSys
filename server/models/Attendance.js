// models/Attendance.js
const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: Number, ref: 'Student', required: true },
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculties', required: true },
  subject: { type: String, required: true },
  branch: { type: String, required: true },
  semester: { type: String, required: true },
  lectureNumber: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  present: { type: Boolean, required: true }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);