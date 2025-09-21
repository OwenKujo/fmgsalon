import React, { useState } from "react";
import { useAdminPass } from "../RequireAdmin";
const API_BASE = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");

interface BlogFormProps {
  mode: "create" | "edit";
  initialValues?: {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    tags: string[];
    categories: string[];
    date: string;
    slug?: string;
  };
  onSubmit?: (data: any) => void;
}

export default function BlogForm({ mode, initialValues, onSubmit }: BlogFormProps) {
  const adminPass = useAdminPass();
  const [title, setTitle] = useState(initialValues?.title || "");
  const [excerpt, setExcerpt] = useState(initialValues?.excerpt || "");
  const [content, setContent] = useState(initialValues?.content || "");
  const [image, setImage] = useState(initialValues?.image || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>(initialValues?.tags || []);
  const [categories, setCategories] = useState<string[]>(initialValues?.categories || []);
  const [date, setDate] = useState(initialValues?.date || "");

  const [newTag, setNewTag] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    let imageUrl = image;
    try {
      // 1. Upload image if file selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const res = await fetch(`${API_BASE}/api/upload/image`, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error("Image upload failed");
        const data = await res.json();
        imageUrl = data.url;
      }
      // 2. Prepare blog data
      const blogData: any = {
        title,
        excerpt,
        content,
        image: imageUrl,
        tags: JSON.stringify(tags),
        categories: JSON.stringify(categories),
        date,
        slug: initialValues?.slug || title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      };
      // 3. Send to API
      const method = mode === "edit" ? "PUT" : "POST";
      const url = mode === "edit" && initialValues?.slug
        ? `${API_BASE}/api/blog/${initialValues.slug}`
        : `${API_BASE}/api/blog`;
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-pass": adminPass || "",
        },
        body: JSON.stringify(blogData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save blog post");
      }
      setSuccess("Blog post saved successfully!");
      // Optionally clear form or redirect
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pt-[80px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32"
    >
      <div className="bg-white shadow-lg rounded-2xl border p-6 space-y-6">
        <h2 className="text-2xl font-bold">
          {mode === "edit" ? "Edit Blog" : "Create New Blog"}
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="Enter blog title"
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium mb-1">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setExcerpt(e.target.value)
            }
            placeholder="Short summary..."
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
            placeholder="Write your blog content here..."
            rows={10}
            required
            className="w-full px-3 py-2 border rounded-lg resize-y focus:ring-2 focus:ring-[#D4B595]"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Cover Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  setImageFile(file);
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-md border"
              />
            )}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newTag}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTag(e.target.value)
              }
              placeholder="Add tag"
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-[#D4B595] text-white rounded-lg hover:bg-[#c4a27e]"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300"
                onClick={() => setTags(tags.filter((t) => t !== tag))}
              >
                {tag} ✕
              </span>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium mb-1">Categories</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCategory(e.target.value)
              }
              placeholder="Add category"
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="px-4 py-2 bg-[#D4B595] text-white rounded-lg hover:bg-[#c4a27e]"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                onClick={() =>
                  setCategories(categories.filter((c) => c !== cat))
                }
              >
                {cat} ✕
              </span>
            ))}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4B595]"
          />
        </div>
      </div>

      {/* Save Button (in-form, not sticky) */}
      <div className="flex justify-end pt-6">
        <button
          type="submit"
          className="bg-[#D4B595] hover:bg-[#c4a27e] px-8 py-2 rounded-lg text-white text-lg font-semibold shadow"
          disabled={loading}
        >
          {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Create Blog"}
        </button>
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
    </form>
  );
}
