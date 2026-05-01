import Candidate from "../models/Candidate.js";

export const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCandidate = await Candidate.findByIdAndDelete(id);

    if (!deletedCandidate) {
      return res.status(404).json({
        message: "Candidate not found"
      });
    }

    res.status(200).json({
      message: "Candidate deleted successfully"
    });

  } catch (err) {
    console.log("Delete error:", err.message);
    res.status(500).json({
      message: err.message
    });
  }
};
