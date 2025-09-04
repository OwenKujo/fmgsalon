import Image from 'next/image';

const services = [
  {
    title: "Hair Spa Treatments",
    description: "Revitalize your hair with our luxurious spa treatments, designed to nourish and restore your hair's natural beauty.",
    image: "/images/wellness/hair-spa.jpg"
  },
  {
    title: "Scalp Care",
    description: "Maintain a healthy scalp with our specialized treatments targeting various scalp conditions and promoting hair growth.",
    image: "/images/wellness/scalp.jpg"
  },
  {
    title: "Nail Health",
    description: "Experience our therapeutic nail care services that not only beautify but also promote nail health and strength.",
    image: "/images/wellness/nails.jpg"
  },
  {
    title: "Natural Treatments",
    description: "Discover our range of natural and organic treatments that are gentle yet effective for both hair and nails.",
    image: "/images/wellness/natural.jpg"
  }
];

export default function Wellness() {
  return (
    <div className="pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-medium text-center mb-12">Wellness Services</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Experience the perfect blend of beauty and wellness at Ferovere Matsenga. 
          Our wellness services are designed to enhance your natural beauty while promoting overall health and well-being.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <h2 className="text-2xl font-medium mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-medium mb-6">Book Your Wellness Session</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards your wellness journey. Our experienced professionals 
            are here to provide you with personalized care and attention.
          </p>
          <button className="bg-[#D4B595] text-white px-10 py-3 rounded-full hover:bg-[#C4A585] transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
