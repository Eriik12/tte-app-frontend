import RegisterFormulary from "../components/Auth/RegisterFormulary";
import Image from "next/image";
const Home = () => {
    return (
      <main className="relative min-h-screen flex flex-col items-center justify-between bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="md:w-1/2">
            <RegisterFormulary />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center hidden lg:block">
          <Image src="/TechTrend-logo.svg" alt="Login" width={500} height={500} />
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;
