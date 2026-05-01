import Candidate from "../models/Candidate.js";

export const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, department, gpa, vision } = req.body;

    const updateData = {
      name: name?.toLowerCase().trim(),
      department,
      gpa,
      vision
    };

    // If new image uploaded
    if (req.file) {
      updateData.img = req.file.path.replace(/\\/g, "/");
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      id,
      updateData,
      { returnDocument: "after" }

    );

    if (!updatedCandidate) {
      return res.status(404).json({
        message: "Candidate not found"
      });
    }

    res.status(200).json({
      message: "Candidate updated successfully",
      updatedCandidate
    });

  } catch (err) {
    console.log("Update error:", err.message);
    res.status(500).json({
      message: err.message
    });
  }
};
