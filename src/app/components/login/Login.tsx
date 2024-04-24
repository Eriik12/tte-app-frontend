'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; 

interface UserData {
  id: string;
  email: string;
  username: string;
}

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          router.push('/');
        }, 500);
        setUserData(data);
        setMensaje('Register succesfull');
        Cookies.set('userData', JSON.stringify(data));
      } else {
        setMensaje('Incorrect data. Please try again.');
      }
    } catch (error) {
      console.error('Error to send request:', error);
      setMensaje('Error to send request.');
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className=" bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          Tech Trend Emporium
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Welcome !</h1>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Sign in</h1>
            <h3 className="leading-tight tracking-tight text-gray-900  dark:text-black">Please enter your credentials to log in</h3>


            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" required />
                </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-black"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                </div>
                <div className="ml-3 text-sm dark:text-black">
                  <label htmlFor="remember" className="text-gray-500 dark:text-black">Remember me</label>
                </div>
              </div>
              <a href="/ForgotPassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-black">Forgot password?</a>
            </div>
            <button type="submit" className=" bg-black w-full text-withe bg-primary-10900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 justify-center">Don&apos;t have an account yet? <a href="/auth" className="font-medium text-primary-600 hover:underline dark:text-black">Register</a></p>

            </form>
            {mensaje && <p className="text-black">{mensaje}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
