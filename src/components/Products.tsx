import React from 'react';

const Products: React.FC = () => {
  return (
    <section className="py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nail Services & Partnerships Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          {/* Left Side - Nail Service Images */}
           
              <div className="h-full rounded-lg overflow-hidden">
                <img 
                  src="/MANI-PEDI-image.png" 
                  alt="Nail Care"
                  className="w-full h-full object-cover"
                />
            
            
          </div>

          {/* Right Side - Partnership Logos */}
          <div className="bg-white rounded-lg p-10 shadow-lg">
            <div className="text-center mb-8">
              <img 
                src="/FMGXNN-2.png" 
                alt="FMG X Naughty Nails Partnership"
                className="mx-auto mb-6 h-26 w-auto"
              />
              <img 
                src="/NN-Products-logo.png" 
                alt="Naughty Nails Products"
                className="mx-auto h-26 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Products We Use Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">PRODUCTS WE USE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hair Treatment Olaplex */}
            <div className=" p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Hair Treatment Olaplex</h3>
              <div className="mb-4 h-1 w-20 rounded" 
                style={{ background: 'linear-gradient(to right, #F7E7B4, #E6D3A3)' }}>
              </div>
              <div className="h-flex rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/Olaplex-2.png" 
                  alt="Olaplex Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                ผลิตภัณฑ์ Olaplex สำหรับการรักษาและซ่อมแซมเส้นผม 
                ช่วยฟื้นฟูความแข็งแรงและความเงางามของเส้นผม
              </p>
            </div>

            {/* Hair Color by Schwarzkopf and MILBON */}
            <div className=" rounded-lg p-10">
              <h3 className="text-l font-bold text-gray-800 mb-4 text-center">Hair Color by Schwarzkopf and MILBON</h3>
              <div className="mb-4 h-1 w-20 rounded" 
                style={{ background: 'linear-gradient(to right, #F7E7B4, #E6D3A3)' }}>
              </div>              
              <div className="h-flex rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/Schwarzkopf-and-MILBON-1.png" 
                  alt="Professional Hair Color"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                สีย้อมผมคุณภาพสูงจาก Schwarzkopf และ MILBON 
                ให้สีที่สดใส ทนทาน และปลอดภัยต่อเส้นผม
              </p>
            </div>

            {/* Brazilian Blowout */}
            <div className="rounded-lg p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">BRAZILIAN BLOWOUT</h3>
              <div className="mb-4 h-1 w-20 rounded" 
                style={{ background: 'linear-gradient(to right, #F7E7B4, #E6D3A3)' }}>
              </div>
              <div className="h-flex rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/BRAZILIAN-BLOWOUT-1.png" 
                  alt="Brazilian Blowout"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                การรักษาเส้นผมแบบ Brazilian Blowout 
                ช่วยให้ผมเรียบลื่น ปราศจากไฟฟ้าสถิต และง่ายต่อการจัดแต่ง
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Products;
