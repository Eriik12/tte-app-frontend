import React from 'react';

const Categories: React.FC = () => {
  return (
    <div className="max-w-full md:max-w-screen-lg mx-auto ">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-black">Categories</h2>
        <p className="text-center text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
      <div className="flex justify-center mb-8">
      <button className=" text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">
        Shop All
      </button>
      </div>
      <div className="flex justify-center hidden lg:block">
        <div className="flex flex-wrap justify-center gap-4 ">
          <div className="max-w-xs ">
            <img src="/TechTrend-logo.svg" alt="Category 1" className="w-full h-auto " />
            <p className="text-center mt-2 text-black">Food</p>
          </div>
          <div className="max-w-xs">
            <img src="/TechTrend-logo.svg" alt="Category 2" className="w-full h-auto" />
            <p className="text-center mt-2 text-black">Itar</p>
          </div>
          <div className="max-w-xs">
            <img src="/TechTrend-logo.svg" alt="Category 3" className="w-full h-auto" />
            <p className="text-center mt-2 text-black">Tasbeeh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
