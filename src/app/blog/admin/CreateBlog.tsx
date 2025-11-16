import React from "react";
import BlogForm from "./BlogForm";
import { Link } from "react-router-dom";

export default function CreateBlog() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <Link
          to="/blog/admin"
          className="text-[#D4B595] hover:underline text-sm mb-4 inline-block"
        >
          ← กลับไปยังหน้าผู้ดูแล
        </Link>
      </div>
      <BlogForm mode="create" />
    </div>
  );
}
