const blogPosts = [
  {
    title: "Latest Hair Trends 2025",
    excerpt: "Discover the hottest hair trends that are making waves this year...",
  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    date: "September 1, 2025",
    slug: "latest-hair-trends-2025"
  },
  {
    title: "Nail Care Tips for Lasting Beauty",
    excerpt: "Essential tips and tricks to maintain beautiful, healthy nails...",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "August 28, 2025",
    slug: "nail-care-tips"
  },
  {
    title: "Hair Care During Summer",
    excerpt: "Protect your hair from summer damage with these expert tips...",
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: "August 25, 2025",
    slug: "summer-hair-care"
  }
];

export default function Blog() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
      </div>
    </div>
  );
}
