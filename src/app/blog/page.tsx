import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Latest Hair Trends 2025",
    excerpt: "Discover the hottest hair trends that are making waves this year...",
    image: "/images/blog/trends.jpg",
    date: "September 1, 2025",
    slug: "latest-hair-trends-2025"
  },
  {
    title: "Nail Care Tips for Lasting Beauty",
    excerpt: "Essential tips and tricks to maintain beautiful, healthy nails...",
    image: "/images/blog/nails.jpg",
    date: "August 28, 2025",
    slug: "nail-care-tips"
  },
  {
    title: "Hair Care During Summer",
    excerpt: "Protect your hair from summer damage with these expert tips...",
    image: "/images/blog/summer.jpg",
    date: "August 25, 2025",
    slug: "summer-hair-care"
  }
];

export default function Blog() {
  return (
    <div className="pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-medium text-center mb-12">Our Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[200px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
