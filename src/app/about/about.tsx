import { Scissors, Sparkles, Gem, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img src="/FMG-Logo-PNG-White-long-01_0-1 (1).png" alt="FMG Logo" className="mx-auto mb-6 h-20 w-auto" />
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">Ferovere Matsenga (FMG) Hair & Nails Salon</span>, 
            where beauty meets expertise. We are dedicated to providing 
            complete hair and nail care services with elegance, professionalism, and passion.
          </p>
        </div>

        {/* Story & Commitment */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Ferovere Matsenga (FMG) Hair Salon provides a comprehensive range of hair services, 
              including shampooing, spa massages, haircutting, styling, straightening, coloring, 
              and overall hair health care using premium-grade products. 
              Backed by expert advice and guaranteed high-quality results, 
              we’ve earned widespread customer trust and acclaim.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              FMG Hair Salon Silom also offers a full-service <strong>Nails Salon</strong>, 
              catering to gel color, manicures, pedicures, spa treatments, nail extensions, 
              and artistic designs. With top-quality products and a professional team, 
              we are here to enhance your beauty from head to toe.
            </p>
          </div>
        </div>

        {/* Thai Description */}
        <div className="bg-[#FDF8F4] rounded-2xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">บริการของเรา (Our Services)</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Ferovere Matsenga (FMG) ให้บริการเกี่ยวกับเส้นผมทุกรูปแบบ 
            ตั้งแต่การสระ นวดสปาผ่อนคลายเส้นผม ตัดแต่งทรงผม ดัด ยืด ทำสี 
            ตลอดจนดูแลสุขภาพเส้นผมด้วยผลิตภัณฑ์ระดับพรีเมี่ยม 
            พร้อมให้คำแนะนำทุกเรื่องผม การันตีด้วยผลงานคุณภาพ 
            และการยอมรับจากลูกค้ามากมาย รวมถึงยังมี <strong>Nails Salon</strong> 
            พร้อมให้บริการความงามอย่างครบวงจร
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us?</h2>
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
        <div className="text-center bg-[#FDF8F4] rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Visit Us</h2>
          <p className="text-gray-700 mb-4">
            <strong>FMG – Ferovere Matsenga Hair Salon</strong><br />
            Silom Edge (3rd floor) · Open Daily 11.00 AM – 09.00 PM
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
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

      </div>
    </div>
  );
}
