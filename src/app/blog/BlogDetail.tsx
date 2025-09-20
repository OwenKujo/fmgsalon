import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <div className="pt-[60px] text-center py-20 text-lg text-gray-500">Loading...</div>;
  if (error) return <div className="pt-[60px] text-center py-20 text-red-500">{error}</div>;
  if (!blog) return null;

  return (
    <div className="pt-[60px] min-h-screen flex flex-col items-center bg-[#f9f7f3]">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 mt-10">
        <Link to="/blog" className="text-[#D4B595] hover:underline text-sm mb-4 inline-block">← Back to Blogs</Link>
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-4">{blog.date}</p>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
        <div className="text-lg text-gray-700 mb-6">{blog.excerpt}</div>
        <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
      </div>
    </div>
  );
}
