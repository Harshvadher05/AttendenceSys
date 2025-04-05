// models/User.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  enrollment: { type: Number, required: true, unique: true },
  branch: { type: Number, required: true},
  semester: { type: Number, required: true},
  // picture:{type:File,required:true,unique:true},
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Student= mongoose.model('Students', StudentSchema);
module.exports={
    Student,
}

