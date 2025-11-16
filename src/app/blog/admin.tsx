
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminBlogList from "./admin/AdminBlogList";
import CreateBlog from "./admin/CreateBlog";
import EditBlog from "./admin/EditBlog";
import SeoManager from "./admin/SeoManager";
import RequireAdmin from "./RequireAdmin";

export default function AdminBlogManager() {
  return (
    <RequireAdmin>
      <Routes>
        <Route path="/" element={<AdminBlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:slug" element={<EditBlog />} />
  <Route path="/seo" element={<SeoManager />} />
      </Routes>
    </RequireAdmin>
  );
}
