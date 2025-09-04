"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Service = { title: string; image: string };

const services: Service[] = [
  { title: "", image: "/MENU-Group-01.jpg" },
  { title: "", image: "/MENU-Group-02.jpg" },
  { title: "", image: "/MENU-Group-03.jpg" },
  { title: "", image: "/MENU-Group-04.jpg" },
  { title: "", image: "/MENU-Group-05.jpg" },
  { title: "", image: "/MENU-Group-06.jpg" },
];

const VISIBLE = 3; // number of cards shown

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % services.length);
  const prev = () => setCurrent((i) => (i - 1 + services.length) % services.length);

  // keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // compute visible cards with wrap-around
  const visible = Array.from(
    { length: VISIBLE },
    (_, k) => services[(current + k) % services.length]
  );

  return (
    <section className="w-full flex bg-[#faf7f3]">
      {/* Left: title block */}
      <div className="w-1/4 min-w-[240px] flex flex-col justify-center pl-16 pr-10 py-16">
        <h2 className="text-2xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-700/80 text-sm leading-relaxed">
          เรามีบริการด้านการทำผมหลากหลาย <br />
          และตอบสนองทุกการทำผมอย่างมั่นใจ
        </p>
      </div>

      {/* Right: cards */}
      <div className="w-3/4 py-12 pr-16">
        <div className="rounded-2xl p-8 overflow-hidden">
          <div className="flex gap-8 items-start pt-10 pb-10">
            {visible.map((service, idx) => (
              <div
                key={`${current}-${idx}-${service.title}`}
                className="relative rounded-[22px] overflow-hidden shadow-xl ring-1 ring-black/5
                           shrink-0 w-[260px] h-[360px] group transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  boxShadow: "0 6px 28px rgba(0,0,0,.14)",
                  transform: `translateY(${idx % 2 === 0 ? "0px" : "40px"})`, // zigzag
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/65 to-transparent">
                  <span className="text-white font-semibold tracking-wide drop-shadow-sm">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}

            {/* subtle peek of next card */}
            <div
              aria-hidden
              className="hidden xl:block relative rounded-[22px] overflow-hidden opacity-50
                         shrink-0 w-[180px] h-[360px]"
              style={{ transform: "translateY(20px)" }}
            >
              <img
                src={services[(current + VISIBLE) % services.length].image}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* arrows */}
        <div className="flex justify-center mt-6 gap-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="size-10 grid place-items-center rounded-full bg-white shadow hover:bg-gray-100 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="size-10 grid place-items-center rounded-full bg-white shadow hover:bg-gray-100 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
