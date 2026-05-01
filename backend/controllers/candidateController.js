import Candidate from "../models/Candidate.js";

export const createCandidate = async (req, res) => {
  try {
    const { name, department, gpa, vision } = req.body;

    // image file
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;

    if (!imagePath) {
      return res.status(400).json({
        message: "Image is required"
      });
    }
  


    const candidate = await Candidate.create({
     name: name.toLowerCase().trim(),
      department,
      gpa,
      vision,
      img: imagePath
    });

    res.status(201).json({
      message: "Candidate created successfully",
      candidate
    });

  } catch (err) {
    // console.log("Candidate error:", err);
      if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map(e => e.message)
      .join(", ");

    return res.status(400).json({
      message
    });
  }
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};
