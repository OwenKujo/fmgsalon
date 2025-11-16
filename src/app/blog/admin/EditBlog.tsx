import React, { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import { useParams, useNavigate } from "react-router-dom";

// Define Blog type
interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  categories?: string[];
  date: string;
}

export default function EditBlog() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadCounter, setReloadCounter] = useState(0);

  // Base API URL helper
  const API_BASE =
    process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");

  useEffect(() => {
    if (!slug) return;
    let mounted = true;

    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_BASE}/api/blog/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data: Blog = await res.json();
        if (mounted) setBlog(data);
      } catch (err) {
        if (mounted) setError((err as Error).message);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBlog();

    return () => {
      mounted = false;
    };
  }, [slug, API_BASE, reloadCounter]);

  // Skeleton Loader
  if (loading) {
    return (
      <div className="pt-[60px] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="pt-[60px] flex flex-col items-center py-20 text-red-500 space-y-4">
        <p>{error}</p>
        <button
            onClick={() => setReloadCounter((c) => c + 1)}
          className="px-4 py-2 bg-[#D4B595] text-white rounded hover:bg-[#c4a27e] transition"
        >
          Retry
        </button>
      </div>
    );
  }

  // No Data
  if (!blog) {
    return (
      <div className="pt-[60px] flex justify-center py-20 text-gray-500">
        No blog data available.
      </div>
    );
  }

  // Render Blog Form in edit mode
  return (
    <div className="pt-[60px] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 🔙 Go Back Button at the top */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/blog/admin")}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          ← กลับ
        </button>
        <h1 className="text-xl font-bold text-gray-800">แก้ไขบทความ</h1>
      </div>

      <BlogForm
        mode="edit"
        initialValues={{
          title: blog.title,
          excerpt: blog.excerpt ?? "",
          content: blog.content,
          image: blog.image ?? "",
          tags: blog.tags ?? [],
          categories: blog.categories ?? [],
          date: blog.date,
          slug: blog.slug,
        }}
      />
    </div>
  );
}
