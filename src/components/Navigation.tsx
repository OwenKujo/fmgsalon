'use client';
// Removed Next.js imports

export default function Navigation() {
  // Removed usePathname, not needed for standard React/HTML

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Matsenga Wellness', path: '/wellness' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
  ];

  const socialLinks = [
    { name: 'Line', icon: '/images/icons/line.svg', href: '#' },
    { name: 'Instagram', icon: '/images/icons/instagram.svg', href: '#' },
    { name: 'Facebook', icon: '/images/icons/facebook.svg', href: '#' },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-b">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="FMG" width={60} height={40} className="object-contain" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-sm font-medium text-gray-600 hover:text-black transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" className="w-6 h-6">
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  width={24} 
                  height={24} 
                  className="opacity-80 hover:opacity-100" 
                />
              </a>
            ))}
            <a 
              href="tel:064456516" 
              className="text-sm font-medium text-black hover:text-gray-600 border-l pl-4 ml-2"
            >
              064-456-516
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
