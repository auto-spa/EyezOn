// components/Quote.js
import Link from 'next/link';
import Image from 'next/image';
import { color } from 'framer-motion';

const Quote = () => {
  return (
    <div className=' flex items-center justify-center min-h-screen '
    style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(113, 0, 187, 0.5)),
          url('/images/bg-quote.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
    <section className="relative bg-black/20 text-white rounded-lg overflow-hidden shadow-lg w-9/12 max-w-4xl">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        {/* <Image
          src="/images/bg-quote.png" // Ensure your image is in the public/images folder
          alt="Car background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        /> */}
      </div>

      {/* Content */}
      <div className="relative p-8 sm:p-12 lg:p-16 max-w-3xl mx-auto">
        <h4 className="text-sm uppercase tracking-widest font-semibold mb-2">
          Get a Quote
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam quis
          massa velit. Nulla id efficitur dui.
        </p>
        <Link href="/book-now">
          <button className="inline-block border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            Book Now
          </button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Quote;
