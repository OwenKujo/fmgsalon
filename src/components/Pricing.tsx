import React from "react";

const Pricing: React.FC = () => {
  const pricingList = [
    { service: "HAIR CUT & BLOW DRY", price: "B 700 - 900" },
    { service: "WASH & BLOW DRY", price: "B 300 - 700" },
    { service: "HAIR COLOR", price: "B 2,500 - 5,500" },
    { service: "BLEACH / HIGHLIGHTS", price: "B 1,000 - 2,000" },
    { service: "PERM", price: "B 2,500 - 4,000" },
    { service: "DIGITAL PERM", price: "B 4,500 - 7,500" },
    { service: "REBONDING HAIR", price: "B 4,500 - 7,500" },
    { service: "HAIR TREATMENT", price: "B 1,500 - 4,500" },
    { service: "SCALP TREATMENT", price: "B 2,500 - 4,000" },
    { service: "KERATIN TREATMENT", price: "B 5,000 - 8,500" },
    { service: "BRAZILIAN BLOWOUT", price: "B 5,500 - 8,500" },
    { service: "POLISH", price: "B 200 - 400" },
    { service: "GEL POLISH", price: "B 399 - 790" },
    { service: "GEL NAIL ART", price: "50 UP" },
  ];

  return (
    <section className="py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Price-banner.png" // Replace with your image
              alt="Pricing Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Pricing */}
          <div className="bg-secondary-beige p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
              OUR PRICING
            </h2>
            {/* Gradient line under title */}
            <div
              className="h-1 w-24 rounded mb-8 mx-auto"
              style={{ background: "linear-gradient(to right, #F7E7B4, #E6D3A3)" }}
            ></div>

            <div className="space-y-3">
              {pricingList.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 rounded hover:bg-yellow-50 transition-colors border-b border-gray-300 last:border-b-0"
                >
                  <span className="text-gray-800 font-medium">{item.service}</span>
                  <span className="text-gray-800 font-bold">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-accent-beige text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold shadow-lg">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
