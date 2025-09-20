import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, X } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      setError("");
      try {
        const API_BASE = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";
        const res = await fetch(`${API_BASE}/api/blog/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);

        // Extract headings for TOC
        if (data.content) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.content, "text/html");
          const h2s = Array.from(doc.querySelectorAll("h2, h3"));
          const headingsList = h2s.map((el) => ({
            id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
            text: el.textContent || "",
          }));
          setHeadings(headingsList);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchBlog();
  }, [slug]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  if (loading) return <div className="pt-[60px] text-center py-20 text-lg text-gray-500">Loading...</div>;
  if (error) return <div className="pt-[60px] text-center py-20 text-red-500">{error}</div>;
  if (!blog) return null;

  return (
    <div className="pt-[60px] bg-[#f9f7f3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link to="/blog" className="text-[#D4B595] hover:underline text-sm mb-4 inline-block">
          ← Back to Blogs
        </Link>

        <div className="lg:flex lg:gap-12">
          {/* Main Blog Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-500 mb-6">{new Date(blog.date).toLocaleDateString()}</p>

            {blog.image && (
              <div className="relative cursor-pointer mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full max-h-[400px] sm:max-h-[500px] object-cover rounded shadow-sm"
                  onClick={() => setIsModalOpen(true)}
                />
                <span className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">Click to expand</span>
              </div>
            )}

            <div className="text-lg text-gray-700 mb-6">{blog.excerpt}</div>

            <div
              className="prose prose-lg max-w-none text-gray-800 mb-8"
              dangerouslySetInnerHTML={{ __html: blog.content || "" }}
            />

            {/* Social Share */}
            <div className="flex items-center gap-4 mt-6">
              <span className="font-medium text-gray-700">Share:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-blue-600 w-6 h-6 hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-blue-400 w-6 h-6 hover:scale-110 transition-transform" />
              </a>
              <a href={`https://instagram.com`} target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 w-6 h-6 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0 mt-10 lg:mt-0">
            {headings.length > 0 && (
              <div className="sticky top-28 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Table of Contents</h3>
                  <ul className="space-y-1">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <button
                          onClick={() => scrollToHeading(h.id)}
                          className="text-sm text-gray-600 hover:text-[#D4B595] hover:underline transition-colors text-left w-full"
                        >
                          {h.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-gray-200 px-2 py-1 rounded text-sm cursor-pointer hover:bg-[#D4B595] hover:text-white transition"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {blog.categories && blog.categories.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.categories.map((cat: string) => (
                        <span
                          key={cat}
                          className="bg-gray-200 px-2 py-1 rounded text-sm cursor-pointer hover:bg-[#D4B595] hover:text-white transition"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && blog.image && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            <img src={blog.image} alt={blog.title} className="max-w-full max-h-[90vh] object-contain rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
