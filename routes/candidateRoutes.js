const express = require("express");
const Candidate = require("../models/Candidate");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// ADD CANDIDATE (TEMP – admin baad me)
router.post("/candidate", async (req, res) => {
  try {
    const candidate = await Candidate.create({ name: req.body.name });
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET CANDIDATES
router.get("/candidates", async (req, res) => {
  res.json(await Candidate.find());
});

// VOTE
router.post("/vote/:id", auth, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user.hasVoted) {
    return res.status(400).json({ message: "Already voted" });
  }

  await Candidate.findByIdAndUpdate(req.params.id, {
    $inc: { votes: 1 }
  });

  user.hasVoted = true;
  await user.save();

  res.json({ message: "Vote successful" });
});

// RESULT
router.get("/result", async (req, res) => {
  res.json(await Candidate.find().sort({ votes: -1 }));
});

module.exports = router;
