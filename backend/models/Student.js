import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  studentID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});



const Student = mongoose.model("Student", studentSchema);

export default Student;
