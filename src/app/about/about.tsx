import { Scissors, Sparkles, Gem, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
            <img src="/WELLNESS-Photoroom.png" alt="Matsenga Gold Logo" className="mx-auto mb-6 h-20 w-auto" />
            <h1 className="text-5xl font-bold mb-6">ABOUT US</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Welcome to <span className="font-semibold">Ferovere Matsenga (FMG) Wellness & Salon Studio</span>, where beauty and wellness destinations meet expertise that combines professional hair salon services and therapeutic massage treatments.
            </p>
        </div>

        {/* Story & Commitment */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
              <h2 className="text-2xl font-semibold mb-4">OUR STORY</h2>
              <p className="text-gray-600 leading-relaxed">
                Dears, salon & wellness lovers! For many years we have offered a wide range of hair services, including shampooing, hair treatments and detoxes, haircutting, styling, straightening, coloring, and overall hair health care using premium-grade products. Alongside, we provide therapeutic massage by Applied Thai Traditional doctors to help heal muscle pain and restore well-being.
              </p>
          </div>
          <div>
              <h2 className="text-2xl font-semibold mb-4">OUR COMMITMENT</h2>
              <p className="text-gray-600 leading-relaxed">
                We are here to enhance your beauty from head to toe and to promote new well-being for all. A whole new story for those who seek a beauty and wellness journey.
              </p>
          </div>
        </div>

        {/* Thai Description */}
        <div className="bg-[#FDF8F4] rounded-2xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">OUR SERVICE / บริการของเรา</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              Ferovere Matsenga (FMG) Wellness & Salon Studio ศูนย์รวมความงามและสุขภาพครบวงจร เรามีบริการดูแลเส้นผม สระผม ย้อมสีผม ผลิตภัณฑ์คุณภาพสูง ปลอดภัย เหมาะกับทุกสภาพผิวและเส้นผม และการนวดรักษาโดยแพทย์แผนไทยประยุกต์ เพื่อให้คุณรู้สึกมั่นใจ ปลอดภัยในทุกสัมผัส
            </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">WHY CHOOSE US ?</h2>
            <p className="text-center text-gray-700 mb-6">We’ve earned widespread customer trust, acclaim and 5/5 stars reviews!</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Scissors className="mx-auto mb-4 text-[#D4B595]" size={40} />
                <h3 className="font-medium text-lg mb-2">Expert Stylists</h3>
                <p className="text-gray-600">Highly skilled team for perfect hair and nail care.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Sparkles className="mx-auto mb-4 text-[#D4B595]" size={40} />
                <h3 className="font-medium text-lg mb-2">Premium Products</h3>
                <p className="text-gray-600">Only the finest, professional-grade products used.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Gem className="mx-auto mb-4 text-[#D4B595]" size={40} />
                <h3 className="font-medium text-lg mb-2">Luxury Experience</h3>
                <p className="text-gray-600">Relax in a clean, comfortable, and stylish environment.</p>
              </div>
            </div>
        </div>

        {/* Contact Section */}
          {/* Split Visit Us into 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FDF8F4] rounded-2xl p-8 shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">FMG - Ferovere Matsenga Hair Salon</h3>
              <p className="text-gray-700 mb-2">Silom Edge (3rd floor) · Open Daily 11:00 AM – 09:00 PM</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="text-[#D4B595]" /> 
                  <span>064 456 5145</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="text-[#D4B595]" /> 
                  <span>Next to BTS Saladaeng, Silom</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">FMG - Ferovere Matsenga Wellness & Salon Studio</h3>
              <p className="text-gray-700 mb-2">True Digital Park (B1 floor, East Side) · Open Daily 10:00 AM – 08:00 PM</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="text-[#D4B595]" /> 
                  <span>086 456 5141</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="text-[#D4B595]" /> 
                  <span>Next to BTS Punnawithi</span>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
