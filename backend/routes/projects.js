const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET /api/projects — All projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// POST /api/projects — Add a project
router.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/projects/:id — Remove a project
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
