import React, { useState, ChangeEvent } from "react";
import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogAdmin() {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);

  // Blog fields
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState(""); 
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [date, setDate] = useState("");
  const [slug, setSlug] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");

  // SEO fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const ENV_PASS = process.env.REACT_APP_ADMIN_PASS || "changeme";

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  // Authentication
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ENV_PASS) {
      setIsAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  // Slug auto-generation
  const handleSlugChange = (val: string) => {
    setSlug(
      val
        .toLowerCase()
        .trim()
        .replace(/[\s]+/g, "-")
        .replace(/[^\w-]+/g, "")
    );
  };

  // Image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Tags
  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const removeTag = (tag: string) => setTags(tags.filter(t => t !== tag));

  // Categories
  const addCategory = () => {
    if (categoryInput.trim() && !categories.includes(categoryInput.trim())) {
      setCategories([...categories, categoryInput.trim()]);
      setCategoryInput("");
    }
  };
  const removeCategory = (cat: string) => setCategories(categories.filter(c => c !== cat));

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !excerpt || !date || !slug || !editor) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("excerpt", excerpt);
      formData.append("date", date);
      formData.append("slug", slug);
      formData.append("content", editor.getHTML());
      formData.append("status", status);
      if (imageFile) formData.append("image", imageFile);
      formData.append("tags", JSON.stringify(tags));
      formData.append("categories", JSON.stringify(categories));
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);
      formData.append("metaKeywords", metaKeywords);

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "x-admin-pass": password },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create blog");
      }

      setSuccess("Blog created successfully!");
      setTitle(""); setExcerpt(""); setImage(""); setImageFile(null); setDate(""); setSlug(""); editor.commands.setContent("");
      setTags([]); setCategories([]); setMetaTitle(""); setMetaDescription(""); setMetaKeywords(""); setStatus("draft");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (!isAuthed) {
    return (
      <div className="pt-[60px] min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <form onSubmit={handleAuth} className="bg-white p-8 rounded shadow max-w-xs w-full">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            className="w-full bg-[#D4B595] text-white font-semibold py-2 rounded hover:bg-[#C4A585] transition"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-[60px] min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mt-10 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>

        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (!slug) handleSlugChange(e.target.value);
            }}
            required
          />

          {/* Excerpt */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />

          {/* Featured Image */}
          <input type="file" accept="image/*" className="w-full" onChange={handleImageUpload} />
          {image && (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
              <img src={image} alt="Preview" className="object-contain w-full h-full" />
            </div>
          )}

          {/* Date */}
          <input type="date" className="w-full border rounded px-3 py-2" value={date} onChange={(e) => setDate(e.target.value)} required />

          {/* Slug */}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Slug (auto-generated from title)"
            value={slug}
            onChange={(e) => handleSlugChange(e.target.value)}
            required
          />

          {/* Tags */}
          <div>
            <label className="block font-medium mb-1">Tags</label>
            <div className="flex space-x-2 mb-2">
              <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Add tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
              />
              <button type="button" onClick={addTag} className="bg-[#D4B595] text-white px-3 py-2 rounded hover:bg-[#C4A585] transition">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded cursor-pointer" onClick={() => removeTag(tag)}>#{tag}</span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block font-medium mb-1">Categories</label>
            <div className="flex space-x-2 mb-2">
              <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Add category"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCategory(); } }}
              />
              <button type="button" onClick={addCategory} className="bg-[#D4B595] text-white px-3 py-2 rounded hover:bg-[#C4A585] transition">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <span key={cat} className="bg-gray-200 px-2 py-1 rounded cursor-pointer" onClick={() => removeCategory(cat)}>#{cat}</span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select className="w-full border rounded px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* SEO */}
          <div>
            <label className="block font-medium mb-1">SEO Meta Title</label>
            <input className="w-full border rounded px-3 py-2" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />

            <label className="block font-medium mb-1 mt-2">SEO Meta Description</label>
            <textarea className="w-full border rounded px-3 py-2" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />

            <label className="block font-medium mb-1 mt-2">SEO Keywords (comma separated)</label>
            <input className="w-full border rounded px-3 py-2" value={metaKeywords} onChange={(e) => setMetaKeywords(e.target.value)} />
          </div>

          {/* Body / Content */}
          <div>
            <label className="block font-medium mb-1">Blog Content</label>
            <div className="border rounded">
              <RichTextEditor editor={editor} className="h-96">
                <RichTextEditor.Content />
              </RichTextEditor>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-[#D4B595] text-white font-semibold py-2 rounded hover:bg-[#C4A585] transition">
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
