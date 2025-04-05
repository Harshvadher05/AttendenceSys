// models/User.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  branch: { type: Number, required: true},
  createdAt: { type: Date, default: Date.now }
});

const Student= mongoose.model('Faculties', StudentSchema);
module.exports={
    Student,
}

