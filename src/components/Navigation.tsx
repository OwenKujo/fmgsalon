'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

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
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="FMG" width={60} height={40} className="object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium ${
                  pathname === item.path
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black transition duration-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" className="w-6 h-6">
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24} 
                  height={24} 
                  className="opacity-80 hover:opacity-100" 
                />
              </Link>
            ))}
            <Link 
              href="tel:064456516" 
              className="text-sm font-medium text-black hover:text-gray-600 border-l pl-4 ml-2"
            >
              064-456-516
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
