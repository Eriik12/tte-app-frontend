import EmployeeMobile from "./EmployeeMobile";

const EmployeePortal: React.FC = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-black font-bold text-4xl my-8">Employee Portal</h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full ">
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300 px-20">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
          <button className="hidden lg:block text-black px-6 py-5 border border-black hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop All</button>
        </div>
        <EmployeeMobile/>
      </div>
    );
  };
  
  export default EmployeePortal;
  