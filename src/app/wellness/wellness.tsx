import React, { useState, useRef, useEffect } from "react";

// Helper hook for fade/slide-in animation on scroll
function useSlideIn<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible] as const;
}

export default function MatsengaWellness() {
  // Service carousel data
  const services = [
    {
      title: "Acupressure Massage",
      subtitle: "นวดรักษากดจุดราชสำนัก",
      description:
        "Experience deep relaxation and healing with our royal court acupressure massage, designed to relieve tension and restore balance.",
      image: "/new-wel1.jpg",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Deep Tissue / Sport Massage",
      subtitle: "นวดน้ำมันรีดเส้น",
      description:
        "Targets deep muscle layers with firm pressure to relieve deep muscle tension, chronic pain and restore body mobility.",
      image: "/new-wel2.jpg",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Migraine Relief Massage",
      subtitle: "นวดศีรษะไมเกรน",
      description:
        "Targeted head massage to release tension and relieve migraine pain.",
      image: "/new-wel3.jpg",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Lymphatic Drainage",
      subtitle: "นวดเดรนน้ำเหลือง",
      description:
        "Gentle technique designed to stimulate the lymphatic system, reduce fluid retention, detoxify the body, and support immune function.",
      image: "/new-wel4.jpg",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Aromatherapy Massage",
      subtitle: "นวดน้ำมันผ่อนคลาย",
      description:
        "Aromatherapy helps relax muscles, enhance blood circulation, nourish the skin, relieve the stress, and improve sleep quality.",
      image: "/new-wel5.jpg",
      duration: "60 min",
      price: "1,600 THB",
    },
  ];

  // Service carousel state
  const [serviceIdx, setServiceIdx] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const prevService = () => {
    setSlideDir("left");
    setTimeout(() => {
      setServiceIdx((i) => (i - 1 + services.length) % services.length);
      setSlideDir(null);
    }, 300);
  };
  const nextService = () => {
    setSlideDir("right");
    setTimeout(() => {
      setServiceIdx((i) => (i + 1) % services.length);
      setSlideDir(null);
    }, 300);
  };

  // Animation hooks
  const [heroRef, heroVisible] = useSlideIn<HTMLDivElement>();
  const [twoColRef, twoColVisible] = useSlideIn<HTMLDivElement>();
  const [carouselRef, carouselVisible] = useSlideIn<HTMLElement>();
  const [serviceSectionRef, serviceSectionVisible] = useSlideIn();
  const [reviewSectionRef, reviewSectionVisible] = useSlideIn();

  // Review carousel state
  const reviewImages = [1, 2, 3, 4, 5, 6].map((n) => `/review${n}.jpg`);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [reviewDir, setReviewDir] = useState<"left" | "right" | null>(null);

  const prevReview = () => {
    setReviewDir("left");
    setTimeout(() => {
      setReviewIdx((i) => (i - 1 + reviewImages.length) % reviewImages.length);
      setReviewDir(null);
    }, 300);
  };
  const nextReview = () => {
    setReviewDir("right");
    setTimeout(() => {
      setReviewIdx((i) => (i + 1) % reviewImages.length);
      setReviewDir(null);
    }, 300);
  };
  const leftIdx = (reviewIdx - 1 + reviewImages.length) % reviewImages.length;
  const rightIdx = (reviewIdx + 1) % reviewImages.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative h-[500px] md:h-[700px] transition-all duration-700 ease-out ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/header_wellness.png)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1ed]/70 via-transparent to-[#f5f1ed]/10"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-sm md:text-3xl tracking-[0.4em] font-light uppercase text-white/90 mb-2">
            Welcome To
          </h1>
          <img
            src="/wel_logo.png"
            alt="Matsenga Wellness Logo"
            className="mx-auto drop-shadow-2xl"
            style={{ height: "220px", width: "auto" }}
          />
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
            A sanctuary of healing and balance — where traditional Thai therapies
            meet modern wellness.
          </p>
          <button className="mt-8 bg-[#D4B08A] hover:bg-[#C4A07A] text-white px-10 py-4 rounded-full text-sm md:text-base font-medium shadow-lg transition-all duration-300">
            Discover Treatments
          </button>
        </div>
      </div>

      {/* Two-column section */}
      <div
        ref={twoColRef}
        className={`flex flex-col lg:flex-row min-h-[600px] transition-all duration-700 ease-out ${
          twoColVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full lg:w-1/3 bg-[#F5F1ED] flex items-center justify-center p-6">
          <img
            src="/second_wellness.jpg"
            alt="Wellness"
            className="w-full max-w-[500px] rounded shadow-lg object-contain"
          />
        </div>
        <div className="w-full lg:w-2/3 bg-[#F5F1ED] p-8 flex flex-col justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-6 leading-relaxed">
            "Because you deserve to <br className="hidden md:block" />
            feel your best, everyday"
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            นวดไทย สปาอินโฮม Office Syndrome & Post Workout Recovery Massage
            การบรรเทาปวดในกล้ามเนื้อและข้อต่อ บรรเทาด้วยการนวดแก้ไขปัญหา
            ดูแลเบื้องต้น ลดอาการปวด รองรับ ความสนุกคนมองชมการเคลื่อนไหวจาก
            กายภาพบำบัด ชู ผู้เชี่ยวชาญ
          </p>
          <button className="mx-auto bg-[#D4B08A] hover:bg-[#C4A07A] text-white px-12 py-4 rounded-full text-md font-medium transition-colors duration-300">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Service Carousel Section */}
      <section
        ref={carouselRef}
        className={`py-16 bg-[#F5F1ED] transition-all duration-700 ease-out ${
          carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">
            Our Signature Treatments
          </h2>
          <div className="relative flex items-center justify-center">
            {/* Buttons outside cards */}
            <button
              onClick={prevService}
              className="absolute -left-12 md:-left-16 z-20 border border-amber-900 text-amber-900 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-sm hover:bg-amber-900 hover:text-white transition-colors duration-200"
            >
              &#60;
            </button>
            <button
              onClick={nextService}
              className="absolute -right-12 md:-right-16 z-20 border border-amber-900 text-amber-900 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-sm hover:bg-amber-900 hover:text-white transition-colors duration-200"
            >
              &#62;
            </button>

            {/* Slides */}
            <div className="w-full overflow-hidden relative h-[400px] md:h-[500px]">
              {services.map((service, idx) => {
                let position = "translate-x-full opacity-0";
                if (idx === serviceIdx)
                  position = "translate-x-0 opacity-100 z-10";
                else if ((idx === (serviceIdx - 1 + services.length) % services.length))
                  position = "-translate-x-full opacity-0 z-0";
                else if (idx === (serviceIdx + 1) % services.length)
                  position = "translate-x-full opacity-0 z-0";

                return (
                  <div
                    key={idx}
                    className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out ${position}`}
                  >
                    <div className="md:w-1/2 w-full flex justify-center items-center bg-[#e5dfd6] p-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96 transition-all duration-500"
                      />
                    </div>
                    <div className="md:w-1/2 w-full p-6 md:p-8 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="text-lg text-gray-700 mb-2">{service.subtitle}</div>
                      <p className="text-base text-gray-700 mb-6">{service.description}</p>
                      <div className="flex items-center justify-between border-t border-b py-4 mb-6">
                        <span className="text-lg text-gray-800">{service.duration}</span>
                        <span className="text-xl md:text-2xl font-bold text-amber-900">
                          {service.price}
                        </span>
                      </div>
                      <button className="bg-red-700 hover:bg-red-800 text-white px-6 md:px-8 py-3 rounded font-semibold">
                        BOOKING
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Service Section */}
      <section
        ref={serviceSectionRef}
        className={`py-16 bg-white transition-all duration-700 ease-out ${
          serviceSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-8">
            Personalized Therapeutic Massage
          </h2>
          <p className="text-center text-gray-700 mb-10 text-base md:text-lg leading-relaxed">
            Every session begins with an one-on-one health consultation with
            ATTM. doctor to understand your body needs and concerns.
            <br />
            ออกแบบการรักษาเฉพาะบุคคล ดูแลโดยแพทย์แผนไทยประยุกต์ เทคนิคพิเศษ
            กดจุดสัญญาณ รัดเส้นตามแนวเส้นประธาน
            <br />
            “เข้าถึงง่าย – สะอาด ปลอดภัย มีคุณภาพ – ให้บริการจริงจัง –
            มุ่งเน้นผลลัพธ์การรักษา”
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            {services.map((srv, i) => (
              <div
                key={i}
                className="bg-[#F5F1ED] rounded-lg shadow p-6 flex flex-col items-center text-center"
              >
                <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-2">
                  {srv.title}
                </h3>
                <p className="text-gray-700 mb-1">{srv.subtitle}</p>
                <p className="text-amber-900 font-bold">
                  {srv.price} / {srv.duration}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <button className="px-8 py-3 border border-amber-900 text-amber-900 rounded-full font-medium text-base hover:bg-amber-900 hover:text-white transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2">
              Book Your Personalized Session
            </button>
          </div>
          <div className="text-center text-2xl md:text-3xl text-amber-900 font-semibold mb-2">
            Tailored to Your Needs
          </div>
          <div className="text-center text-xl md:text-3xl text-gray-700 mb-6">
            One price{" "}
            <span className="font-bold text-amber-900">1,600 THB / 60 mins</span>
          </div>
          <div className="text-center text-base md:text-lg text-gray-500 leading-relaxed">
            <span>
              B1 fl. East Side TRUE Digital Park 101
              <br />
              <span className="text-md">
                Because you deserve to feel your best — every day
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Review Carousel Section */}
<section
  ref={reviewSectionRef}
  className={`py-16 bg-[#F5F1ED] transition-all duration-700 ease-out ${
    reviewSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">
      Customer Reviews
    </h2>
    <p className="text-center text-gray-700 mb-10 text-base md:text-lg leading-relaxed">
      Real feedback from our valued clients. Thank you for trusting us with your wellness journey!
    </p>

    <div className="relative flex items-center justify-center">
      {/* Buttons */}
      <button
        onClick={prevReview}
        className="absolute -left-12 md:-left-16 z-20 bg-[#e5dfd6] text-amber-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow hover:bg-[#e5dfd6]/80 transition-colors duration-200"
      >
        &#60;
      </button>
      <button
        onClick={nextReview}
        className="absolute -right-12 md:-right-16 z-20 bg-[#e5dfd6] text-amber-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow hover:bg-[#e5dfd6]/80 transition-colors duration-200"
      >
        &#62;
      </button>

      {/* Carousel images */}
      <div className="w-full max-w-[420px] md:max-w-[600px] h-[260px] md:h-[340px] relative overflow-hidden flex items-center justify-center">
        {/* Left blurred image */}
        <img
          src={reviewImages[(reviewIdx - 1 + reviewImages.length) % reviewImages.length]}
          alt="Review left"
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-32 h-40 md:w-40 md:h-56 rounded-lg object-cover blur-sm opacity-60 z-0 transition-all duration-500 ${
            reviewDir === "left" ? "-translate-x-full opacity-0" : ""
          }`}
        />

        {/* Center image */}
        <img
          src={reviewImages[reviewIdx]}
          alt="Current review"
          className={`relative z-10 w-48 h-60 md:w-72 md:h-96 rounded-xl object-cover shadow-lg mx-auto border-4 border-white transition-all duration-500 ${
            reviewDir === "left"
              ? "translate-x-8 opacity-70"
              : reviewDir === "right"
              ? "-translate-x-8 opacity-70"
              : "translate-x-0 opacity-100"
          }`}
        />

        {/* Right blurred image */}
        <img
          src={reviewImages[(reviewIdx + 1) % reviewImages.length]}
          alt="Review right"
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-32 h-40 md:w-40 md:h-56 rounded-lg object-cover blur-sm opacity-60 z-0 transition-all duration-500 ${
            reviewDir === "right" ? "translate-x-full opacity-0" : ""
          }`}
        />
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
