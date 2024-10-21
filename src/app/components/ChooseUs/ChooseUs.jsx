"use client";
import Link from 'next/link';
import Image from 'next/image';

const ChooseUs = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold uppercase mb-8">Why Choose Us</h2>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-5xl font-bold mb-6 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
              quis massa velit. Nulla id efficitur dui. Etiam id lacinia dui, id
              porttitor nisl. Etiam vel ante vitae tortor pulvinar vulputate.
              Etiam vitae tellus ac nunc sollicitudin laoreet.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Lorem Ipsum</label>
                <div className="w-full bg-gray-300 rounded-full h-6">
                  <div
                    className="bg-purple-700 h-6 rounded-full flex items-center justify-end pr-4"
                    style={{ width: '85%' }}
                  >
                    <span className="text-white text-sm font-semibold">85%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Lorem Ipsum</label>
                <div className="w-full bg-gray-300 rounded-full h-6">
                  <div
                    className="bg-purple-700 h-6 rounded-full flex items-center justify-end pr-4"
                    style={{ width: '85%' }}
                  >
                    <span className="text-white text-sm font-semibold">85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Link href="/book-now">
              <button className="mt-8 inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-500 transition">
                Book Now
              </button>
            </Link>
          </div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-purple-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🚗</div>
                <h4 className="text-xl font-semibold">Our Mission</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta velit vel metus ultricies venenatis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/car-detail-1.jpg"
                alt="Car detailing"
                width={400}
                height={250}
                objectFit="cover"
              />
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/car-detail-2.jpg"
                alt="Engine cleaning"
                width={400}
                height={250}
                objectFit="cover"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-purple-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💡</div>
                <h4 className="text-xl font-semibold">Our Vision</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta velit vel metus ultricies venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
