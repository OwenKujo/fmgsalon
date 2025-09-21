import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  date: string;
  status: string;
}

export default function AdminBlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      setError("");
      try {
        const API_BASE =
          process.env.REACT_APP_API_URL ||
          (process.env.NODE_ENV === "development"
            ? "http://localhost:4000"
            : "");
        const res = await fetch(`${API_BASE}/api/blog`);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;
    try {
      const API_BASE =
        process.env.REACT_APP_API_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : "");
      const res = await fetch(`${API_BASE}/api/blog/${slug}`, {
        method: "DELETE",
        headers: { "x-admin-pass": localStorage.getItem("adminPass") || "" },
      });
      if (!res.ok) throw new Error("Failed to delete blog");
      setBlogs((prev) => prev.filter((b) => b.slug !== slug));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className="pt-[60px] min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8 mt-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Manage Blog Posts
          </h1>
          <Link
            to="/blog/admin/create"
            className="bg-[#D4B595] text-white px-4 py-2 rounded-md shadow hover:bg-[#C4A585] transition"
          >
            + New Post
          </Link>
        </div>

        {/* States */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No blog posts found. <br />
            <Link
              to="/blog/admin/create"
              className="text-[#D4B595] hover:underline"
            >
              Create your first post
            </Link>
          </div>
        ) : (
          /* Blog table */
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-sm text-gray-700">
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Slug</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium text-gray-800">
                      {blog.title}
                    </td>
                    <td className="p-3 text-gray-600">{blog.slug}</td>
                    <td className="p-3 text-gray-600">
                      {new Date(blog.date).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2 justify-center">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                        onClick={() => navigate(`/blog/admin/edit/${blog.slug}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                        onClick={() => handleDelete(blog.slug)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
