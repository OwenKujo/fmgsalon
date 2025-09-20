import React from "react";
import { Scissors, Sparkles, Brush } from "lucide-react"; // icons

const Pricing: React.FC = () => {
  const pricingList = [
    { service: "HAIR CUT & BLOW DRY", price: "B 700 - 900", category: "Hair" },
    { service: "WASH & BLOW DRY", price: "B 300 - 700", category: "Hair" },
    { service: "HAIR COLOR", price: "B 2,500 - 5,500", category: "Hair" },
    { service: "BLEACH / HIGHLIGHTS", price: "B 1,000 - 2,000", category: "Hair" },
    { service: "PERM", price: "B 2,500 - 4,000", category: "Hair" },
    { service: "DIGITAL PERM", price: "B 4,500 - 7,500", category: "Hair" },
    { service: "REBONDING HAIR", price: "B 4,500 - 7,500", category: "Hair" },
    { service: "HAIR TREATMENT", price: "B 1,500 - 4,500", category: "Treatment" },
    { service: "SCALP TREATMENT", price: "B 2,500 - 4,000", category: "Treatment" },
    { service: "KERATIN TREATMENT", price: "B 5,000 - 8,500", category: "Treatment" },
    { service: "BRAZILIAN BLOWOUT", price: "B 5,500 - 8,500", category: "Treatment" },
    { service: "POLISH", price: "B 200 - 400", category: "Nails" },
    { service: "GEL POLISH", price: "B 399 - 790", category: "Nails" },
    { service: "GEL NAIL ART", price: "50 UP", category: "Nails" },
  ];

  // Group services by category
  const grouped = pricingList.reduce((acc: any, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Icons for categories
  const categoryIcons: Record<string, React.ReactNode> = {
    Hair: <Scissors className="w-6 h-6 text-yellow-500" />,
    Treatment: <Sparkles className="w-6 h-6 text-pink-500" />,
    Nails: <Brush className="w-6 h-6 text-purple-500" />,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary-beige to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-wide">
            OUR PRICING
          </h2>
          <div className="h-1 w-28 mx-auto rounded bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse"></div>
          <p className="mt-4 text-gray-600">
            Premium hair, nail & treatment services just for you
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {Object.entries(grouped).map(([category, services]) => (
            <div
              key={category}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {categoryIcons[category]}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {category}
                </h3>
              </div>

              {/* Services */}
              <div className="space-y-4">
                {(services as any).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0 group"
                  >
                    <span className="text-gray-700 group-hover:text-pink-600 transition">
                      {item.service}
                    </span>
                    <span className="text-gray-900 font-bold group-hover:text-purple-600 transition">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
