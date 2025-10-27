import React, { useState } from "react";
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react";

type Branch = {
  id: string;
  name: string;
  addressLine: string;
  city: string;
  phone: string;
  hours: string;
  mapSrc: string;
};

const branches: Branch[] = [
  {
    id: "silom",
    name: "FMG Wellness & Salon Silom Edge (3rd floor)",
    addressLine: "Silom Edge, 3rd Floor",
    city: "Bangkok, Thailand",
    phone: "064 456 5145",
    hours: "Open Daily 11.00 AM - 09.00 PM",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.045602806819!2d100.53159841004219!3d13.731408316845224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fd98f8f8a27%3A0xf3ab711d22b57275!2sFMG%20Hair%20Salon%20Silom%20Edge!5e0!3m2!1sen!2sth!4v1756808331940!5m2!1sen!2sth",
  },
  {
    id: "true digital park",
    name: "FMG Wellness & Salon Studio",
    addressLine: "True Digital Park (B1 floor, East)",
    city: "Bangkok, Thailand",
    phone: " 086-456-5141",
    hours: "Open Daily 10.00 AM - 08.00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5343291043323!2d100.6117577!3d13.6860562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d618c115172c5%3A0xadea06e346db2d70!2sFMG%20Wellness%20%26%20Salon%20Studio%20(True%20Digital%20Park)!5e0!3m2!1sen!2sth!4v1761547221985!5m2!1sen!2sth",
  },
];

const BranchCard: React.FC<{ branch: Branch }> = ({ branch }) => (
  <div className="w-full max-w-md md:max-w-lg mx-auto bg-white rounded-2xl p-6 shadow-md border border-gray-100">
    <div className="text-left">
      <h3 className="text-lg font-semibold text-gray-800">{branch.name}</h3>
      <div className="h-1 w-20 mt-2 rounded bg-accent-beige"></div>
    </div>

    <div className="mt-4 space-y-4">
      <div className="flex items-center">
        <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md">
          <MapPin className="w-6 h-6 text-gray-800" />
        </div>
        <div>
          <p className="text-gray-800 font-semibold">{branch.addressLine}</p>
          <p className="text-gray-600 text-sm">{branch.city}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md">
          <Phone className="w-6 h-6 text-gray-800" />
        </div>
        <div>
          <p className="text-gray-800 font-semibold">Tel. {branch.phone}</p>
          <p className="text-gray-600 text-sm">Call us for appointments</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md">
          <Clock className="w-6 h-6 text-gray-800" />
        </div>
        <div>
          <p className="text-gray-800 font-semibold">{branch.hours}</p>
          <p className="text-gray-600 text-sm">7 days a week</p>
        </div>
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [index, setIndex] = useState(0);
  const selected = branches[index];

  function prev() {
    setIndex((i) => (i - 1 + branches.length) % branches.length);
  }
  function next() {
    setIndex((i) => (i + 1) % branches.length);
  }

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Google Map (updates with selected branch) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title={`FMG Hair Salon - ${selected.name}`}
              src={selected.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Side - Contact Information with sliding branch cards */}
          <div className="flex flex-col justify-start">

            {/* Logo and heading */}
            <div className="text-center mb-6">
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-4 w-52 md:w-64 object-contain"
              />
              <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
              <div className="h-1 w-20 mx-auto mt-2 rounded bg-accent-beige"></div>
            </div>

            {/* Slider controls + cards */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={prev}
                aria-label="Previous branch"
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:scale-95"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="overflow-hidden flex-1">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {branches.map((b) => (
                    <div key={b.id} className="flex-shrink-0 w-full flex justify-center">
                      <BranchCard branch={b} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                aria-label="Next branch"
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:scale-95"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* (moved contact details into the sliding cards above) */}

            {/* Book Now Button */}
            <div className="mt-8 text-center">
              <button className="px-10 py-4 rounded-full bg-accent-beige text-gray-800 font-semibold text-lg shadow-lg hover:bg-gray-100 transition">
                BOOK NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
