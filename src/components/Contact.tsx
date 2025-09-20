import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Google Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="FMG Hair Salon Silom Edge"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.045602806819!2d100.53159841004219!3d13.731408316845224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fd98f8f8a27%3A0xf3ab711d22b57275!2sFMG%20Hair%20Salon%20Silom%20Edge!5e0!3m2!1sen!2sth!4v1756808331940!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col justify-center">
            
            {/* Logo */}
            <div className="text-center mb-10">
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-4 w-52 md:w-64 object-contain"
              />
              <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
              <div className="h-1 w-20 mx-auto mt-2 rounded bg-accent-beige"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md hover:bg-accent-beige transition">
                  <MapPin className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Silom Edge (3rd floor)</p>
                  <p className="text-gray-600 text-sm">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md hover:bg-accent-beige transition">
                  <Phone className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Tel. 064 456 5145</p>
                  <p className="text-gray-600 text-sm">Call us for appointments</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-accent-beige/80 rounded-full flex items-center justify-center mr-4 shadow-md hover:bg-accent-beige transition">
                  <Clock className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Open Daily 10.00 AM - 10.00 PM</p>
                  <p className="text-gray-600 text-sm">7 days a week</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-10 text-center">
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
