// controllers/studentController.js
exports.getStudentAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.find({ studentId: req.user.id });
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  