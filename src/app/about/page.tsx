export default function About() {
  return (
    <div className="pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-medium text-center mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-center mb-8">
            Welcome to Ferovere Matsenga Hair & Nails Salon, where beauty meets expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for beauty and a commitment to excellence, Ferovere Matsenga has been serving our community with top-tier hair and nail services. Our journey began with a simple mission: to provide exceptional beauty services while making every client feel special and valued.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">Our Commitment</h2>
              <p className="text-gray-600 mb-4">
                We are committed to providing the highest quality services using premium products and staying current with the latest trends and techniques in the beauty industry. Our team of experienced professionals undergoes regular training to ensure we deliver the best results for our clients.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-medium mb-4 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-medium mb-2">Expert Team</h3>
                <p className="text-gray-600">Highly skilled and experienced beauty professionals</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-2">Premium Products</h3>
                <p className="text-gray-600">We use only the best products for our services</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-2">Clean Environment</h3>
                <p className="text-gray-600">Hygienic and comfortable salon environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
