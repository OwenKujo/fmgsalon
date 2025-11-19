import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

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
      image: "/ACP.jpg",
      options: [
        { duration: "60 mins", price: "1,600 THB" },
        { duration: "90 mins", price: "2,400 THB" },
        { duration: "120 mins", price: "3,200 THB" },
      ],
    },
    {
      title: "Deep Tissue / Sport Massage",
      subtitle: "นวดน้ำมันรีดเส้น",
      description:
        "Targets deep muscle layers with firm pressure to relieve deep muscle tension, chronic pain and restore body mobility.",
      image: "/deep.jpg",
      options: [
        { duration: "60 mins", price: "1,600 THB" },
        { duration: "90 mins", price: "2,400 THB" },
        { duration: "120 mins", price: "3,200 THB" },
      ],
    },
    {
      title: "Office Syndrome & Migraine Relief",
      subtitle: "นวดรักษาอาการออฟฟิศซินโดรมและไมเกรน",
      description:
        "Targeted therapy for release and gentle mobilization relieve stiffness and reduce tension headaches.",
      image: "/office.jpg",
      options: [
        { duration: "60 mins", price: "1,600 THB" },
        { duration: "90 mins", price: "2,400 THB" },
        { duration: "120 mins", price: "3,200 THB" },
      ],
    },
    {
      title: "Head Therapeutic Massage",
      subtitle: "นวดศีรษะบำบัด",
      description:
        "Focusing on the forehead and head areas, including acupressure points, to stimulate the nervous system, and aiding relaxation.",
      image: "/head.jpg",
      options: [
        { duration: "45 mins", price: "1,200 THB" },
        { duration: "60 mins", price: "1,600 THB" },
      ],
    },
    {
      title: "Balance Body Alignment Treatment",
      subtitle: "นวดปรับสมดุลโครงสร้างร่างกาย",
      description:
        "Gentle technique designed to stimulate the lymphatic system, reduce fluid retention, detoxify the body, and support immune function.",
      image: "/lym.png",
      options: [
        { duration: "60 mins", price: "1,600 THB" },
        { duration: "90 mins", price: "2,400 THB" },
        { duration: "120 mins", price: "3,200 THB" },
      ],
    },
    {
      title: "Aromatherapy Massage",
      subtitle: "นวดน้ำมันผ่อนคลาย",
      description:
        "Aromatherapy helps relax muscles, enhance blood circulation, nourish the skin, relieve the stress, and improve sleep quality.",
      image: "/aro.jpg",
      options: [
        { duration: "60 mins", price: "1,600 THB" },
        { duration: "90 mins", price: "2,400 THB" },
        { duration: "120 mins", price: "3,200 THB" },
      ],
    },
  ];

  // Service carousel state
  // For the top "Our Signature Treatments" carousel we exclude the
  // 'Balance Body Alignment Treatment' entry while keeping it in the
  // full `services` array used later in the personalized section.
  const slideServices = services.filter(
    (s) => s.title !== "Balance Body Alignment Treatment"
  );

  const [serviceIdx, setServiceIdx] = useState(0);
  const prevService = () => {
    setServiceIdx((i) => (i - 1 + slideServices.length) % slideServices.length);
  };
  const nextService = () => {
    setServiceIdx((i) => (i + 1) % slideServices.length);
  };

  // Images for the left-panel slider in the two-column section
  const slideImages = [
    "/second_wellness.jpg",
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
  ];
  const [slideIdx, setSlideIdx] = useState(0);
  const prevSlide = () => setSlideIdx((i) => (i - 1 + slideImages.length) % slideImages.length);
  const nextSlide = () => setSlideIdx((i) => (i + 1) % slideImages.length);
  // auto-advance slides every 4s
  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % slideImages.length), 4000);
    return () => clearInterval(id);
  }, [slideImages.length]);

  // Animation hooks
  const [heroRef, heroVisible] = useSlideIn<HTMLDivElement>();
  const [twoColRef, twoColVisible] = useSlideIn<HTMLDivElement>();
  const [carouselRef, carouselVisible] = useSlideIn<HTMLElement>();
  const [serviceSectionRef, serviceSectionVisible] = useSlideIn();
  const [reviewSectionRef, reviewSectionVisible] = useSlideIn();

  // Review carousel state
  // Use public images named r1.jpg ... r7.jpg
  const reviewImages = [1, 2, 3, 4, 5, 6, 7].map((n) => `/r${n}.jpg`);
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

  const handleBookNow = () => {
    try {
      navigator.clipboard?.writeText('@172kadad');
    } catch (e) {
      // ignore
    }
    window.open('https://line.me/R/ti/p/@172kadad', '_blank');
  };
  

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
          
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5a3e36] via-[#a87b62] to-[#f5f1ed]"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-sm md:text-3xl tracking-[0.4em] font-light uppercase text-white/90 mb-2">
            Welcome To
          </h1>
          <img
            src="/WELLNESS-Photoroom.png"
            alt="Matsenga Wellness Logo"
            className="mx-auto drop-shadow-2xl"
            style={{ height: "220px", width: "auto" }}
          />
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
            A sanctuary of healing and elements balance where traditional Thai therapists meet modern wellness.
          </p>
          <button
            onClick={() => carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="mt-8 bg-[#D4B08A] hover:bg-[#C4A07A] text-white px-10 py-4 rounded-full text-sm md:text-base font-medium shadow-lg transition-all duration-300"
          >
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
        {/* Left: circular sliding image panel */}
        <div className="w-full lg:w-1/3 bg-[#F5F1ED] flex items-center justify-center p-6">
          <div className="relative w-full max-w-[420px] md:max-w-[520px] h-[480px] md:h-[640px] rounded-xl overflow-hidden flex items-center justify-center bg-gray-100 shadow-md">
            {slideImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`slide ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  i === slideIdx ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-6 z-0"
                }`}
              />
            ))}

            {/* Prev / Next buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-amber-900 rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-amber-900 rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              ›
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-[#F5F1ED] p-8 flex flex-col justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-6 leading-relaxed">
            “Where tradition meets precision <br className="hidden md:block" />
            and every touch heals”
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            ...In every session begins with a one-on-one health consultation to understand your body’s needs and concerns. Say goodbye to office syndrome, muscle tightness, and sports-related tension — we use precise pressure at signal points and targeted techniques to unlock tension safely. Our hygienic, soothing space is curated for total relaxation {" "}
            <a
              href="https://www.instagram.com/matsenga.well"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 underline"
            >
              (@matsenga.well)
            </a>
            .
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            “นวดแล้วหาย… ไม่ใช่แค่นวดแล้วสบาย” เพราะทุกเคสได้รับการดูแลโดยแพทย์แผนไทยประยุกต์ ด้วยเทคนิคเฉพาะที่ตรงจุด เพื่อผลลัพธ์ที่สัมผัสได้จริง
          </p>
          <button onClick={handleBookNow} className="mx-auto mt-6 bg-[#D4B08A] hover:bg-[#C4A07A] text-white px-12 py-4 rounded-full text-md font-medium transition-colors duration-300">
            BOOK NOW
          </button>
        
          {/* split contact section removed from here and moved to page bottom */}
        </div>
      </div>

      {/* Service Carousel Section */}
      <section id="treatments"
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
            <div className="w-full overflow-hidden relative h-[520px] md:h-[600px]">
              {slideServices.map((service, idx) => {
                let position = "translate-x-full opacity-0";
                if (idx === serviceIdx)
                  position = "translate-x-0 opacity-100 z-10";
                else if (
                  idx === (serviceIdx - 1 + slideServices.length) % slideServices.length
                )
                  position = "-translate-x-full opacity-0 z-0";
                else if (idx === (serviceIdx + 1) % slideServices.length)
                  position = "translate-x-full opacity-0 z-0";

                return (
                  <div
                    key={idx}
                    className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out ${position}`}
                  >
                    <div className="hidden md:flex md:w-1/2 w-full justify-center items-center p-2 md:p-2 rounded-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96 transition-all duration-500"
                      />
                    </div>
                    <div className="md:w-1/2 w-full p-6 md:p-8 text-center md:text-left flex flex-col h-full">
                      <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="text-lg text-gray-700 mb-2">{service.subtitle}</div>
                      <p className="text-base text-gray-700 mb-6">{service.description}</p>
                      <div className="flex items-center justify-center gap-4 border-t border-b py-6 mb-6 flex-wrap max-h-56 overflow-auto sm:max-h-full">
                        {service.options?.map((opt, k) => (
                          <div
                            key={k}
                            className="w-full sm:min-w-[220px] md:min-w-[320px] bg-white/95 rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-4 hover:shadow-md transition cursor-default"
                          >
                            <div className="text-left">
                              <div className="text-sm text-gray-500">{opt.duration}</div>
                              <div className="text-xs text-gray-400">per session</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg md:text-2xl font-extrabold text-amber-900">{opt.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button onClick={handleBookNow} className="bg-red-700 hover:bg-red-800 text-white px-6 md:px-8 py-3 rounded font-semibold mt-auto self-center md:self-start">
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
          <p className="text-center text-gray-700 mb-10 text-xs md:text-sm leading-relaxed">
            one-on-one health consultation with Applied Thai Traditional doctors to understand your body needs and concerns.
            <br />
            ออกแบบการรักษาเฉพาะบุคคล ดูแลโดยแพทย์แผนไทยประยุกต์ “เข้าถึงง่าย สะอาด ปลอดภัย มีคุณภาพ มุ่งเน้นผลลัพธ์การรักษา”

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
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <button onClick={handleBookNow} className="px-8 py-3 border border-amber-900 text-amber-900 rounded-full font-medium text-base hover:bg-amber-900 hover:text-white transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2">
              Book Your Personalized Session
            </button>
          </div>
          <div className="text-center text-xl md:text-3xl text-gray-700 mb-6">
            One price{" "}
            <span className="font-bold text-amber-900">1,600 THB / 60 mins</span>
          </div>
          <div className="text-center text-2xl md:text-3xl text-amber-900 font-semibold mb-2">
            Tailored to Your Needs
          </div>
          
          <div className="text-center text-base md:text-lg text-gray-500 leading-relaxed">
            <span>
              <br />
              <span className="text-md">
                Feel free to reach us for more information or any inquiries 
                <br />Line ID: @172kadad | Tel: 086-456-5141
                <br />For promotion and something interesting
                <br />please follow us on FB/IG: Matsenga wellness
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
      Thank you for trusting us with your wellness journey !
      <br />We truly appreciate your kind feedback.

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
  
  {/* Split contact section (map left / details right) — placed at page bottom */}
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="FMG Wellness True Digital Park"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5343291043323!2d100.6117577!3d13.6860562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d618c115172c5%3A0xadea06e346db2d70!2sFMG%20Wellness%20%26%20Salon%20Studio%20(True%20Digital%20Park)!5e0!3m2!1sen!2sth!4v1761547221985!5m2!1sen!2sth"
          className="w-full h-[360px] md:h-[420px]"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
        <img
          src="/WELLNESS-Photoroom.png"
          alt="Matsenga Wellness Logo"
          className="mx-auto mb-4 w-40 md:w-48 object-contain"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-3">FMG Wellness & Salon Studio</h3>
        <div className="h-1 w-20 mb-4 rounded bg-accent-beige" />
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="text-amber-900 mt-1"><MapPin className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold">True Digital Park (B1 floor, East)</div>
              <div className="text-sm text-gray-600">Bangkok, Thailand</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="text-amber-900 mt-1"><Phone className="w-5 h-5" /></div>
            <div>
              <a href="tel:0864565141" className="font-semibold hover:underline">086-456-5141</a>
              <div className="text-sm text-gray-600">Call us for appointments</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="text-amber-900 mt-1"><Clock className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold">Open Daily 10.00 AM - 08.00 PM</div>
              <div className="text-sm text-gray-600">7 days a week</div>
            </div>
          </li>
        </ul>
        <div className="mt-6">
          <a href="tel:0864565141" className="inline-block px-6 py-3 bg-amber-900 text-white rounded-full font-medium">Call Now</a>
          <span className="ml-4 text-sm text-gray-600">Line: @172kadad</span>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}
