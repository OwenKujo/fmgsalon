import mongoose from "mongoose";

const seoSchema = new mongoose.Schema({
    path: { type: String, required: true, unique: true },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    ogImage: { type: String, default: "" },
    canonical: { type: String, default: "" },
    robots: { type: String, default: "" },
}, { timestamps: true });

const Seo = mongoose.model("Seo", seoSchema);
export default Seo;
