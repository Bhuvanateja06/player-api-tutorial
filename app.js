const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/Player');  // assuming you have a Player model

const router = express.Router();
// GET all players
router.get("/", async (req, res) => {
  const players = await Player.find();
  res.status(200).json(players);
});

// GET a single player
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findById(id);
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});

// PATCH a single player's information
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});

// DELETE a single player
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findOneAndDelete({ _id: id });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});
// Routes here (the ones you shared above)

module.exports = router;
