import Student from "../models/Student.js";
import Vote from "../models/Vote.js";
import Candidate from "../models/Candidate.js";
// import Candidate  from "../models/Candidate.js";
export const castVote = async (req, res) => {
  const { name, studentID, candidate,candidateName, program, department } = req.body;

  try {
    // Validate student using BOTH name + ID
    const student = await Student.findOne({
      name: name.toLowerCase().trim(),
      studentID: studentID.trim()
    });

    if (!student) {
      return res.status(403).json({
        message: "Invalid student name or ID incorrect"
      });
    }

    // Prevent duplicate voting
    const alreadyVoted = await Vote.findOne({
      student: student._id
    });

    if (alreadyVoted) {
      return res.status(400).json({
        message: "You have already voted"
      });
    }
  
    
 await Candidate.findOneAndUpdate(
  { name: candidate.toLowerCase().trim() },
  { $inc: { voteCount: 1 } },
  { returnDocument: "after" }
);

    //  Create vote
    const vote = await Vote.create({
      student: student._id,
      studentID: student.studentID,
      name: student.name,
      candidate,
      candidateName,
      program,
      department
    });

    return res.status(200).json({
      message: "your vote has been cast successfully registered",
      vote
    });

  } catch (err) {
    console.log("Voting error:", err);
    return res.status(500).json({
      message: "Something went wrong"
    });
  }
};

