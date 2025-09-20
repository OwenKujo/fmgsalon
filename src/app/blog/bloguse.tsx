import React, { useEffect, useState } from "react";

export default function BlogList() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchBlogs() {
			setLoading(true);
			setError("");
			try {
				const API_BASE = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";
				const res = await fetch(`${API_BASE}/api/blog`);
				if (!res.ok) throw new Error("Failed to fetch blogs");
				const data = await res.json();
				setBlogPosts(data);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		}
		fetchBlogs();
	}, []);

	return (
		<div className="pt-[60px]">
			<div className="max-w-[1200px] mx-auto px-4 py-16">
				{/* Top Section */}
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h1 className="text-4xl font-bold mb-4">OUR BLOGS</h1>
					<p className="text-lg text-gray-700 mb-2">Find all our blogs here</p>
					<p className="text-gray-600">
						Our beauty and wellness blogs are crafted by experienced researchers and renowned 
						writers, ensuring you receive trusted insights, expert tips, and inspiring articles 
						to support your journey toward looking and feeling your best.
					</p>
				</div>
				{/* Blog Grid */}
				{loading ? (
					<div className="text-center text-lg text-gray-500 py-12">Loading blogs...</div>
				) : error ? (
					<div className="text-center text-red-500 py-12">{error}</div>
				) : blogPosts.length === 0 ? (
					<div className="text-center text-gray-500 py-12">No blogs found.</div>
				) : (
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post: any) => (
							<a href={`/blog/${post.slug}`} key={post.slug} className="group">
								<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="relative h-[220px]">
										<img
											src={post.image}
											alt={post.title}
											className="object-cover w-full h-full"
										/>
									</div>
									<div className="p-6">
										<p className="text-sm text-gray-500 mb-2">{post.date}</p>
										<h2 className="text-xl font-medium mb-2 group-hover:text-[#D4B595] transition-colors duration-300">
											{post.title}
										</h2>
										<p className="text-gray-600">{post.excerpt}</p>
										<div className="mt-4">
											<span className="text-[#D4B595] font-medium group-hover:text-[#C4A585] transition-colors duration-300">
												Read More →
											</span>
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
