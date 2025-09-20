
import express from "express";
import Blog from "../models/Blog.js";
import multer from "multer";

const router = express.Router();
const upload = multer(); // memory storage

// Middleware for admin auth
function adminAuth(req, res, next) {
    const pass = req.headers["x-admin-pass"] || req.body.adminPass;
    if (pass === process.env.ADMIN_PASS) return next();
    return res.status(401).json({ error: "Unauthorized" });
}

// Get all blogs (no content)
router.get("/", async (req, res) => {
    const blogs = await Blog.find({}, "-content").sort({ date: -1 });
    res.json(blogs);
});

// Get blog by slug
router.get("/:slug", async (req, res) => {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ error: "Not found" });
    res.json(blog);
});

// Create blog (admin only, supports multipart/form-data for image upload)
router.post("/", adminAuth, upload.single("image"), async (req, res) => {
    try {
        const {
            title, excerpt, date, slug, content, status,
            tags, categories, metaTitle, metaDescription, metaKeywords
        } = req.body;
        let image = req.body.image;
        // If file uploaded, convert to base64
        if (req.file) {
            image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
        }
        if (!title || !excerpt || !date || !slug || !content) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        // Parse tags/categories if sent as JSON string
        let tagsArr = [];
        let categoriesArr = [];
        try {
            tagsArr = tags ? JSON.parse(tags) : [];
        } catch { tagsArr = []; }
        try {
            categoriesArr = categories ? JSON.parse(categories) : [];
        } catch { categoriesArr = []; }
        const blog = new Blog({
            title,
            excerpt,
            image,
            date,
            slug,
            content,
            status: status || "draft",
            tags: tagsArr,
            categories: categoriesArr,
            metaTitle: metaTitle || "",
            metaDescription: metaDescription || "",
            metaKeywords: metaKeywords || ""
        });
        await blog.save();
        res.status(201).json(blog);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// Update blog (admin only)
router.put("/:slug", adminAuth, async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate(
            { slug: req.params.slug },
            req.body,
            { new: true }
        );
        if (!blog) return res.status(404).json({ error: "Not found" });
        res.json(blog);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// Delete blog (admin only)
router.delete("/:slug", adminAuth, async (req, res) => {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
});

export default router;
