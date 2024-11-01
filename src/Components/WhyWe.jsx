import React from 'react';

const WhyWe = () => {
  const features = [
    { title: 'No hidden cost, upfront pricing', imgSrc: 'https://via.placeholder.com/50' },
    { title: '100% family owned and operated', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'Fully licensed and accredited', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'Work around your schedules', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'FREE professional advice', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'No obligation estimations', imgSrc: 'https://via.placeholder.com/50' },
    { title: '100% money back guaranteed', imgSrc: 'https://via.placeholder.com/50' },
    { title: 'We leave your premises clean & tidy', imgSrc: 'https://via.placeholder.com/50' },
  ];

  return (
      <div className="bg-gray-800 text-white py-10 px-4">
          <div className='new'>
      <h2 className="text-center  text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex  flex-col items-center p-4 bg-gray-700 rounded-lg">
            <img src={feature.imgSrc} alt="icon" className="w-12 h-12 mb-4" />
            <p className="text-center text-sm font-semibold">{feature.title}</p>
            </div>
            
        ))}
              </div>
              </div>
    </div>
  );
};

export default WhyWe;
