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
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      setAnimate(true);
    }, 200);
  };

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
      );
      setAnimate(true);
    }, 200);
  };

  return (
    <section id="home" className="relative">
      {/* Banner Carousel */}
      <div className="relative h-80 md:h-[500px] overflow-hidden rounded-b-2xl shadow-lg">
        <img
          src={bannerImages[currentSlide].image}
          alt={bannerImages[currentSlide].title}
          className="w-full h-full object-cover transition-transform duration-700 scale-105"
        />

        {/* Gradient Overlay with Animated Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-accent-beige/40 to-transparent flex items-center">
          <div
            className={`px-6 md:px-16 max-w-2xl transition-all duration-700 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-4">
              {bannerImages[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-gray-700 drop-shadow">
              {bannerImages[currentSlide].description}
            </p>
            <div className="text-2xl font-semibold mb-4 text-accent-beige">
              OPEN DAILY 10.00 - 22.00 Hrs.
            </div>
            <div className="text-lg text-gray-700">
              Ferovere Matsenga Hair & Nails Salon
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent-beige/80 hover:bg-accent-beige text-gray-800 p-3 rounded-full transition-all shadow-lg"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent-beige/80 hover:bg-accent-beige text-gray-800 p-3 rounded-full transition-all shadow-lg"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent-beige scale-125 shadow-md ring-2 ring-white"
                  : "bg-accent-beige/60 hover:bg-accent-beige"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-accent-beige via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                Ferovere Matsenga
              </span>{" "}
              Hair & Nails Salon
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              เรามีบริการสระผม นวด สปา ทำทรงผม ย้อมสีผม ผลิตภัณฑ์คุณภาพสูง
              คำแนะนำจากผู้เชี่ยวชาญ งานคุณภาพ ความพึงพอใจของลูกค้า และบริการ
              Nails Salon
            </p>
            <button className="bg-accent-beige text-gray-800 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold shadow-lg text-lg">
              BOOK NOW
            </button>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-lg">
            <div className="text-center">
              {/* Logo Image */}
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-6 w-48 md:w-64 object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800 mb-1">
                Ferovere Matsenga
              </p>
              <p className="text-lg text-gray-600 mb-8">Hair & Nails Salon</p>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-accent-beige">📍</span>
                  <p className="text-gray-800 font-medium">
                    Silom Edge (3rd floor)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-beige">📞</span>
                  <p className="text-gray-800 font-medium">Tel. 064 456 5145</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-beige">🕒</span>
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
