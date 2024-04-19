import React from 'react';

const OurProducts: React.FC = () => {
  return (
    <div className="max-w-full md:max-w-screen-lg mx-auto my-20">
      <div className=" mb-4">
        <h2 className="text-2xl font-bold text-black text-center">Our Products</h2>
        <p className=" text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
      <div className="flex justify-center mb-8">
      <button className=" text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">
        Shop All
      </button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-xs">
            <img src="/TechTrend-logo.svg" alt="Category 1" className="w-full h-auto" />
            <p className=" mt-2 text-black">Jae Namaz</p>
            <p className=" text-gray-600">$99</p>
          </div>
          <div className="max-w-xs">
            <img src="/TechTrend-logo.svg" alt="Category 2" className="w-full h-auto" />
            <p className=" mt-2 text-black">Dates</p>
            <p className=" text-gray-600">$99</p>
          </div>
          <div className="max-w-xs">
            <img src="/TechTrend-logo.svg" alt="Category 3" className="w-full h-auto" />
            <p className=" mt-2 text-black">Miswak</p>
            <p className=" text-gray-600">$99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
