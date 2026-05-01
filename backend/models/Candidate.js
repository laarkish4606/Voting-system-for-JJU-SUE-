import mongoose from "mongoose";

const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  department: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  gpa: {
    type: Number,
    required: true
  },

  vision: { 
    type: String,
    required: true,
    trim: true
  },

  img: {
    type: String, 
    required: true
  },

  voteCount: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
