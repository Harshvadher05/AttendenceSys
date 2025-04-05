const sendNotification = (student, message) => {
    // Simulate sending a notification
    console.log(`Notification sent to ${student.email}: ${message}`);
};

/**
 * Notifies students if their attendance is below the required threshold.
 * @param {Object} student - Student object.
 * @param {number} attendancePercentage - Current attendance percentage.
 */
const notifyLowAttendance = (student, attendancePercentage) => {
    const ATTENDANCE_THRESHOLD = 75;
    if (attendancePercentage < ATTENDANCE_THRESHOLD) {
        sendNotification(student, `Your attendance is low (${attendancePercentage}%). Please attend classes regularly.`);
    }
};

module.exports = { notifyLowAttendance };
