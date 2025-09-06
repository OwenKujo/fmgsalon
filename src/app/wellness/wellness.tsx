import React, { useState } from "react";

export default function MatsengaWellness() {
  // Service carousel data
  const services = [
    {
      title: "Acupressure Massage",
      subtitle: "นวดรักษากดจุดราชสำนัก",
      description:
        "Experience deep relaxation and healing with our royal court acupressure massage, designed to relieve tension and restore balance.",
      image: "/นวดรักษากดจุดราชสำนัก.png",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Deep Tissue / Sport Massage",
      subtitle: "นวดน้ำมันรีดเส้น",
      description:
        "Targets deep muscle layers with firm pressure to relieve deep muscle tension, chronic pain and restore body mobility.",
      image: "/นวดน้ำมันรีดเส้น.png",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Migraine Relief Massage",
      subtitle: "นวดศีรษะไมเกรน",
      description:
        "Targeted head massage to release tension and relieve migraine pain.",
      image: "/นวดศีรษะไมเกรน.png",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Lymphatic Drainage",
      subtitle: "นวดเดรนน้ำเหลือง",
      description:
        "Gentle technique designed to stimulate the lymphatic system, reduce fluid retention, detoxify the body, and support immune function.",
      image: "/นวดเดรนน้ำเหลือง.png",
      duration: "60 min",
      price: "1,600 THB",
    },
    {
      title: "Aromatherapy Massage",
      subtitle: "นวดน้ำมันผ่อนคลาย",
      description:
        "Aromatherapy helps relax muscles, enhance blood circulation, nourish the skin, relieve the stress, and improve sleep quality.",
      image: "/นวดน้ำมันผ่อนคลาย.png",
      duration: "60 min",
      price: "1,600 THB",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c - 1 + services.length) % services.length);
  const next = () => setCurrent((c) => (c + 1) % services.length);
  const s = services[current];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[650px]">
        <div
          className="h-full absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/header_wellness.png)" }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-black/35"></div>
        </div>

        {/* Logo + Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-lg md:text-2xl tracking-[0.2em] font-light mb-4">
              WELCOME TO
            </h1>
            <img
              src="/wel_logo.png"
              alt="Matsenga Wellness Logo"
              className="mx-auto"
              style={{ height: "220px", width: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Two-column section */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 bg-[#F5F1ED] flex items-center justify-center p-6">
          <img
            src="/second_wellness.jpg"
            alt="Wellness"
            className="w-full max-w-[500px] rounded shadow-lg object-contain"
          />
        </div>

        {/* Right Side */}
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
      <section className="py-16 bg-[#F5F1ED]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">
            Our Signature Treatments
          </h2>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center items-center bg-[#e5dfd6] p-6">
              <img
                src={s.image}
                alt={s.title}
                className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96"
              />
            </div>
            {/* Content */}
            <div className="md:w-1/2 w-full p-6 md:p-8 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                {s.title}
              </h3>
              <div className="text-lg text-gray-700 mb-2">{s.subtitle}</div>
              <p className="text-base text-gray-700 mb-6">{s.description}</p>
              <div className="flex items-center justify-between border-t border-b py-4 mb-6">
                <span className="text-lg text-gray-800">{s.duration}</span>
                <span className="text-xl md:text-2xl font-bold text-amber-900">
                  {s.price}
                </span>
              </div>
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 md:px-8 py-3 rounded font-semibold">
                BOOKING
              </button>
            </div>
          </div>
          {/* Carousel Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="bg-[#e5dfd6] text-amber-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl font-bold"
            >
              &#60;
            </button>
            <button
              onClick={next}
              className="bg-[#e5dfd6] text-amber-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl font-bold"
            >
              &#62;
            </button>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-16 bg-white">
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

          {/* Grid of Services */}
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

          <div className="text-center text-2xl md:text-3xl text-amber-900 font-semibold mb-2">
            Tailored to Your Needs
          </div>
          <div className="text-center text-xl md:text-3xl text-gray-700 mb-6">
            One price{" "}
            <span className="font-bold text-amber-900">
              1,600 THB / 60 mins
            </span>
          </div>
          <div className="text-center text-base md:text-lg text-gray-500 leading-relaxed">
            Free consultation with ATM. Doctor
            <br />
            B1 fl. East Side TRUE Digital Park 101
            <br />
            <span className="text-md">
              Because you deserve to feel your best — every day
            </span>
          </div>
        </div>
      </section>
    </div>
  );  
}
