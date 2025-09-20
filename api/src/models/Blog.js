import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    categories: { type: [String], default: [] },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    metaKeywords: { type: String, default: "" },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
