import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <section id="home" className="relative">
      {/* Carousel */}
      <div className="relative h-80 md:h-[600px] overflow-hidden rounded-b-3xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={bannerImages[currentSlide].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={bannerImages[currentSlide].image}
              alt={bannerImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="px-6 md:px-16 text-white max-w-xl">
                <motion.h2
                  key={bannerImages[currentSlide].title}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow"
                >
                  {bannerImages[currentSlide].title}
                </motion.h2>
                <motion.p
                  key={bannerImages[currentSlide].description}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-2xl mb-6 opacity-90"
                >
                  {bannerImages[currentSlide].description}
                </motion.p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 rounded-full bg-accent-beige text-gray-900 font-semibold shadow-lg hover:scale-105 transition">
                    BOOK NOW
                  </button>
                  <button className="px-8 py-3 rounded-full border border-white/80 text-white hover:bg-white/20 transition font-medium">
                    VIEW SERVICES
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-900 p-3 rounded-full transition-all shadow-lg"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-900 p-3 rounded-full transition-all shadow-lg"
        >
          <ChevronRight size={28} />
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 w-40">
          {bannerImages.map((_, index) => (
            <div
              key={index}
              className="h-1 flex-1 rounded-full overflow-hidden bg-white/30"
            >
              <motion.div
                className="h-full bg-accent-beige"
                animate={{
                  width: index === currentSlide ? "100%" : "0%",
                }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            </div>
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
            <div className="w-20 h-1 bg-accent-beige mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              เรามีบริการสระผม นวด สปา ทำทรงผม ย้อมสีผม ผลิตภัณฑ์คุณภาพสูง
              คำแนะนำจากผู้เชี่ยวชาญ งานคุณภาพ ความพึงพอใจของลูกค้า และบริการ
              Nails Salon
            </p>
            <div className="flex gap-4">
              <button className="bg-accent-beige text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg text-lg">
                BOOK NOW
              </button>
              <button className="px-8 py-4 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-lg">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl">
            <div className="text-center">
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-6 w-48 md:w-64 object-contain"
              />
              <p className="text-2xl font-semibold text-gray-800 mb-1">
                Ferovere Matsenga
              </p>
              <p className="text-lg text-gray-600 mb-8">Hair & Nails Salon</p>

              <div className="space-y-5 text-left">
                <div className="flex items-center gap-3 group">
                  <span className="bg-accent-beige/20 p-2 rounded-full group-hover:scale-110 transition">
                    📍
                  </span>
                  <p className="text-gray-800 font-medium">
                    Silom Edge (3rd floor)
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="bg-accent-beige/20 p-2 rounded-full group-hover:scale-110 transition">
                    📞
                  </span>
                  <p className="text-gray-800 font-medium">Tel. 064 456 5145</p>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="bg-accent-beige/20 p-2 rounded-full group-hover:scale-110 transition">
                    🕒
                  </span>
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
