import Student from "../models/Student.js";
export const StudentRegister = async (req, res) => {
  const { name, studentID } = req.body;

  try {
    
    const normalizedName = name.toLowerCase().trim();
    const normalizedID = studentID.trim();

   
    const isStudentExist = await Student.findOne({
      studentID: normalizedID
    });

    if (isStudentExist) {
      return res.status(400).json({
        message: "Student already exists"
      });
    }

    
    const newStudent = await Student.create({
      name: normalizedName,
      studentID: normalizedID
    });

    return res.status(201).json({
      message: "Student registered successfully",
      student: newStudent
    });

  } catch (err) {
    console.log("Student register error:", err);
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

