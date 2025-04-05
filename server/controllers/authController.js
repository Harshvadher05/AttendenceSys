// controllers/authController.js
const Student = require('../models/Student1');
const Faculties = require('../models/Faculties1');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    // const { name, email, password, role } = req.body;
    const body = req.body;
    console.log(body);
    const hashedPassword = await bcrypt.hash(body.password, 10);
    if(body.role==0){
        const faculty= new Faculties ({
            name:body.name,
            email:body.email,
            password:body.password,
            branch:body.branch,
        })
        await faculty.save();
        const token = jwt.sign({ facultyId: faculty._id, role: faculty.role }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRATION });
        res.status(201).json({ token });    
    }else{
        const student= new Student ({
            name:body.name,
            email:body.email,
            password:body.password,
            branch:body.branch,
            enrollment:body.enrollment,
            semester:body.semester,
            picture:body.picture,
        })
        await student.save();
        const token = jwt.sign({ studentId: student._id, role: student.role }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRATION });
        res.status(201).json({ token });
    }
    // console.log(result);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    if (role == 0) {
        const Faculties = await Faculties.findOne({email});
        if (!Faculties || !(await bcrypt.compare(password, Faculties.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
          }
          const token = jwt.sign({ id: Faculties._id, role: Faculties.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.json({ token, Faculties });
    } else {
        const Students = await Students.findOne({email});
        if (!Students || !(await bcrypt.compare(password, Students.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
          }
          const token = jwt.sign({ id: Students._id, role: Students.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.json({ token, Students });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ userId: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRATION });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
