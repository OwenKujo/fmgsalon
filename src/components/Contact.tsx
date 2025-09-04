import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Google Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              title="FMG Hair Salon Silom Edge"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.045602806819!2d100.53159841004219!3d13.731408316845224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fd98f8f8a27%3A0xf3ab711d22b57275!2sFMG%20Hair%20Salon%20Silom%20Edge!5e0!3m2!1sen!2sth!4v1756808331940!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col justify-center">
            
            {/* Logo and Salon Info */}
            <div className="text-center mb-8">
              <img
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
                alt="FMG Logo"
                className="mx-auto mb-4 w-48 md:w-64 object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-beige rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-800 text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Silom Edge (3rd floor)</p>
                  <p className="text-gray-600 text-sm">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-beige rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-800 text-xl">📞</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Tel. 064 456 5145</p>
                  <p className="text-gray-600 text-sm">Call us for appointments</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-beige rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-800 text-xl">🕒</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Open Daily 10.00 AM - 10.00 PM</p>
                  <p className="text-gray-600 text-sm">7 days a week</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-8 text-center">
              <button className="bg-accent-beige text-gray-800 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold shadow-lg text-lg">
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
