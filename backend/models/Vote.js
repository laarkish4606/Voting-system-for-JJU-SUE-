import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
    unique: true 
  },

  studentID: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  program: {
    type: String,
    required: true,
    lowercase: true
  },

  department: {
    type: String,
    required: true,
    lowercase: true
  },

  candidate: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Candidate",
  required: true
  },

  candidateName: {
    type: String,
    required: true
  }

});


const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
