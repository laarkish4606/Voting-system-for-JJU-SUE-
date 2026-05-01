import Candidate from "../models/Candidate.js";

export const getCandidates = async (req, res) => {
  const candidates = await Candidate.find();

  // console.log("CANDIDATES:", candidates);

  res.json(candidates);
};
