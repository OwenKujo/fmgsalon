'use client';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
}

export default function ServiceCard({ title, imageUrl }: ServiceCardProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-[280px] h-[280px] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded">
        <h3 className="text-lg font-medium uppercase">{title}</h3>
      </div>
    </div>
  );
}
