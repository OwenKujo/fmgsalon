import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  {
    id: 1,
    title: "Ferovere Matsenga",
    description: "Professional hair repair and protection",
    image: "/465623995_1059718609487585_6186430544580081574_n.png",
  },
  {
    id: 2,
    title: "Ferovere Matsenga",
    description: "Smooth and frizz-free hair",
    image: "/videoframe_2261.png",
  },
  {
    id: 3,
    title: "Ferovere Matsenga",
    description: "Premium hair styling products",
    image: "/videoframe_7525.png",
  },
  {
    id: 4,
    title: "Ferovere Matsenga",
    description: "Expert coloring services",
    image: "/videoframe_7682.png",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <section id="home" className="relative">
      {/* Banner Carousel */}
      <div className="relative h-80 md:h-[500px] overflow-hidden">
        <img
          src={bannerImages[currentSlide].image}
          alt={bannerImages[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {bannerImages[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-6">
              {bannerImages[currentSlide].description}
            </p>
            <div className="text-2xl font-bold mb-4">
              OPEN DAILY 10.00 - 22.00 Hrs.
            </div>
            <div className="text-lg">
              Ferovere Matsenga Hair & Nails Salon
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to Ferovere Matsenga Hair & Nails Salon
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              เรามีบริการสระผม นวด สปา ทำทรงผม ย้อมสีผม ผลิตภัณฑ์คุณภาพสูง
              คำแนะนำจากผู้เชี่ยวชาญ งานคุณภาพ ความพึงพอใจของลูกค้า และบริการ
              Nails Salon
            </p>
            <button className="bg-accent-beige text-gray-800 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg">
              BOOK NOW
            </button>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-secondary-beige p-8 rounded-lg">
            <div className="text-center">
              {/* Logo Image */}
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-4 w-48 md:w-64 object-contain"
              />
              <p className="text-xl text-gray-600 mb-1">Ferovere Matsenga</p>
              <p className="text-lg text-gray-600 mb-6">Hair Salon</p>

              <div className="space-y-4 text-left">
                <div>
                  <p className="text-gray-800 font-medium">
                    Silom Edge (3rd floor)
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Tel. 064 456 5145</p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Open Daily 10.00 AM - 10.00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
