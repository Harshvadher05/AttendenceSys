// models/User.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true, unique: true },
  semester: { type: Number, required: true},
  totalLecture: { type: Number, required: true}}
);

const Student= mongoose.model('Subjects', StudentSchema);
module.exports={
    Student,
}

