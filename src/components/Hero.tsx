import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const bannerImages = [
  { id: 1, image: "/465623995_1059718609487585_6186430544580081574_n.png" },
  { id: 2, image: "/videoframe_2261.png" },
  { id: 3, image: "/videoframe_7525.png" },
  { id: 4, image: "/videoframe_7682.png" },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Branch slider for hero contact box
  type Branch = {
    id: string;
    name: string;
    addressLine: string;
    city: string;
    phone: string;
    hours: string;
  };

  const heroBranches: Branch[] = [
    {
      id: 'silom',
      name: 'FMG Wellness',
      addressLine: 'Silom Edge, 3rd Floor',
      city: 'Bangkok, Thailand',
      phone: '064 456 5145',
      hours: 'Open Daily 11.00 AM - 09.00 PM',
    },
    {
      id: 'true-digital',
      name: 'FMG Wellness & Salon Studio',
      addressLine: 'True Digital Park (B1 floor, East)',
      city: 'Bangkok, Thailand',
      phone: '086-456-5141',
      hours: 'Open Daily 10.00 AM - 08.00 PM',
    },
  ];

  const [branchIdx, setBranchIdx] = useState(0);
  

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

  const { t } = useLanguage();

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
              alt={"banner"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="px-6 md:px-16 text-white max-w-xl">
                <motion.h2
                  key={`banner-${bannerImages[currentSlide].id}-title`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow"
                >
                  {t(`banner.${bannerImages[currentSlide].id}.title`)}
                </motion.h2>
                <motion.p
                  key={`banner-${bannerImages[currentSlide].id}-desc`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-2xl mb-6 opacity-90"
                >
                  {t(`banner.${bannerImages[currentSlide].id}.description`)}
                </motion.p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 rounded-full bg-accent-beige text-gray-900 font-semibold shadow-lg hover:scale-105 transition">
                    {t('hero.bookNow')}
                  </button>
                  <button className="px-8 py-3 rounded-full border border-white/80 text-white hover:bg-white/20 transition font-medium">
                    {t('hero.discover')}
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
              {t('hero.welcome')} {" "}
              <span className="bg-gradient-to-r from-accent-beige via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                {t('hero.brand')}
              </span>{" "}
              {t('hero.hairSalon')}
            </h1>
            <div className="w-20 h-1 bg-accent-beige mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t('hero.subtitle1')}</p>

            <div className="flex gap-4">
              <button className="bg-accent-beige text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg text-lg">
                {t('hero.bookNow')}
              </button>
              <button className="px-8 py-4 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-lg">
                {t('hero.discover')}
              </button>
            </div>
          </div>

          {/* Right Side - Sliding Contact Card (same as Contact component) */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl">
            <div className="text-center">
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-6 w-48 md:w-64 object-contain"
              />

              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={() => setBranchIdx(i => (i - 1 + heroBranches.length) % heroBranches.length)}
                  className="p-2 rounded-full bg-white border border-gray-200 shadow-sm mr-4"
                  aria-label="Previous branch"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <div className="overflow-hidden w-full max-w-md">
                  <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${branchIdx * 100}%)` }}>
                    {heroBranches.map(b => (
                      <div key={b.id} className="flex-shrink-0 w-full flex justify-center px-4">
                        <div className="w-full max-w-md">
                          <h3 className="text-lg font-semibold text-gray-800">{b.name}</h3>
                          <div className="h-1 w-20 mt-2 rounded bg-accent-beige mb-4"></div>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-accent-beige/80 rounded-full flex items-center justify-center mr-3">
                                <MapPin className="w-5 h-5 text-gray-800" />
                              </div>
                              <div>
                                <p className="text-gray-800 font-semibold">{b.addressLine}</p>
                                <p className="text-gray-600 text-sm">{b.city}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-accent-beige/80 rounded-full flex items-center justify-center mr-3">
                                <Phone className="w-5 h-5 text-gray-800" />
                              </div>
                              <div>
                                <p className="text-gray-800 font-semibold">Tel. {b.phone}</p>
                                <p className="text-gray-600 text-sm">Call us for appointments</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-accent-beige/80 rounded-full flex items-center justify-center mr-3">
                                <Clock className="w-5 h-5 text-gray-800" />
                              </div>
                              <div>
                                <p className="text-gray-800 font-semibold">{b.hours}</p>
                                <p className="text-gray-600 text-sm">7 days a week</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBranchIdx(i => (i + 1) % heroBranches.length)}
                  className="p-2 rounded-full bg-white border border-gray-200 shadow-sm ml-4"
                  aria-label="Next branch"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="mt-6">
                <button className="px-10 py-4 rounded-full bg-accent-beige text-gray-800 font-semibold text-lg shadow-lg hover:bg-gray-100 transition">
                  {t('hero.bookNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
