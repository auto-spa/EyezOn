// components/Package.jsx
import { FaCheckCircle } from 'react-icons/fa';

const Package = () => {
  const packages = [
    {
      title: 'Standard Detail',
      price: '$150',
      features: [
        'Foam Bath/Pre Wash',
        'Wheels/wells Cleaned',
        'Foam Bath/Pre Wash',
        'Contact Wash',
        'Doors & Trunk Jamb',
        'Tire Dressing',
        'Spot Free Windows',
        'Interior Blow Out',
        'Vacuum/Dust',
        'Air Freshener',
      ],
    },
    {
      title: 'Standard Detail',
      price: '$150',
      features: [
        'Foam Bath/Pre Wash',
        'Wheels/wells Cleaned',
        'Foam Bath/Pre Wash',
        'Contact Wash',
        'Doors & Trunk Jamb',
        'Tire Dressing',
        'Spot Free Windows',
        'Interior Blow Out',
        'Vacuum/Dust',
        'Air Freshener',
      ],
    },
    {
        title: 'Standard Detail',
        price: '$150',
        features: [
          'Foam Bath/Pre Wash',
          'Wheels/wells Cleaned',
          'Foam Bath/Pre Wash',
          'Contact Wash',
          'Doors & Trunk Jamb',
          'Tire Dressing',
          'Spot Free Windows',
          'Interior Blow Out',
          'Vacuum/Dust',
          'Air Freshener',
        ],
      },
      {
        title: 'Standard Detail',
        price: '$150',
        features: [
          'Foam Bath/Pre Wash',
          'Wheels/wells Cleaned',
          'Foam Bath/Pre Wash',
          'Contact Wash',
          'Doors & Trunk Jamb',
          'Tire Dressing',
          'Spot Free Windows',
          'Interior Blow Out',
          'Vacuum/Dust',
          'Air Freshener',
        ],
      },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold uppercase mb-4">Our Packages</h2>
        <p className="text-xl mb-8">
          Experience the best with our tailored packages!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-purple-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold uppercase mb-2">
                {pkg.title}
              </h3>
              <p className="text-4xl font-extrabold mb-4">
                {pkg.price} <span className="text-lg font-normal">/Starting at</span>
              </p>
              <hr className="border-t border-white/30 my-4" />

              <div className="grid grid-cols-2 gap-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <FaCheckCircle className="text-white mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
