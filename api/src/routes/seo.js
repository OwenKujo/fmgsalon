import express from "express";
import Seo from "../models/Seo.js";

const router = express.Router();

// admin auth middleware (same pattern as blog routes)
function adminAuth(req, res, next) {
    const pass = req.headers["x-admin-pass"] || req.body?.adminPass;
    if (pass === process.env.ADMIN_PASS) return next();
    return res.status(401).json({ error: "Unauthorized" });
}

// List all entries
router.get("/", async (req, res) => {
    const entries = await Seo.find({}).sort({ path: 1 });
    res.json(entries);
});

// Get single by id
router.get("/:id", async (req, res) => {
    const e = await Seo.findById(req.params.id);
    if (!e) return res.status(404).json({ error: "Not found" });
    res.json(e);
});

// Create
router.post("/", adminAuth, async (req, res) => {
    try {
        const { path, title, description, ogImage, canonical, robots } = req.body;
        if (!path) return res.status(400).json({ error: "Path is required" });
        const exists = await Seo.findOne({ path });
        if (exists) return res.status(409).json({ error: "Entry already exists for this path" });
        const e = new Seo({ path, title, description, ogImage, canonical, robots });
        await e.save();
        res.status(201).json(e);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update
router.put("/:id", adminAuth, async (req, res) => {
    try {
        const updated = await Seo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "Not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete
router.delete("/:id", adminAuth, async (req, res) => {
    const deleted = await Seo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
});

export default router;
