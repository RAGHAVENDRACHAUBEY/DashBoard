import React from 'react';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';

function Feature() {

  const features = [
    {
      title: 'TruEstimate',
      description: 'Find out how much your property is worth',
      image: feature1,
    },
    {
      title: 'Search 2.0',
      description: 'Find homes by drive time',
      image: feature2,
    },
    {
      title: 'Map View',
      description: 'Search for properties in preferred area using map',
      image: feature3, 
    },
  ];


  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 h-[16rem] sm:h-[18rem] md:h-[21rem] bg-no-repeat bg-center bg-cover relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundColor: '#f5f7fa',
            }}
          >
            <div className="absolute inset-0 ml-3 sm:ml-5 md:ml-[20px] p-4 sm:p-6 md:p-[29px] flex flex-col justify-between w-[180px] sm:w-[190px] md:w-[208px]">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {item.description}
                  <span className="font-semibold ml-1">&gt;</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature; 