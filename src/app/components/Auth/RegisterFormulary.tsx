'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    securityQuestion: '',
    response: ''
  });
  const [mensaje, setMensaje] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setMensaje('Registration successful');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error to send request:', error);
      setMensaje('Error to send request.');
    }
  };
  
  const router = useRouter();

  const securityQuestions = [
    { number: 1, question: 'What is your mother\'s maiden name?' },
    { number: 2, question: 'What was the name of your first pet?' },
    { number: 3, question: 'What city were you born in?' },
    { number: 4, question: 'What is the name of your favorite teacher?' },
    { number: 5, question: 'What is your favorite movie?' },
    { number: 6, question: 'What is your favorite book?' },
    { number: 7, question: 'What is the name of your childhood best friend?' },
    { number: 8, question: 'What is your favorite color?' },
    { number: 9, question: 'What is the make and model of your first car?' },
    { number: 10, question: 'What is your favorite food?' }
  ];

  return (
    <section className="bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          Tech Trend Emporium
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Sign up</h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your user email" required />
              </div>
              <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your username" required />
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
                    placeholder="Enter your password"
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
              <div>
                <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium text-gray-900">Repeat Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="repeatPassword"
                    id="repeatPassword"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your password again"
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
              <div>
                <label htmlFor="securityQuestion" className="block mb-2 text-sm font-medium text-gray-900">Security Question</label>
                <select
                  name="securityQuestion"
                  id="securityQuestion"
                  value={formData.securityQuestion}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="" disabled>Select your question</option>
                  {securityQuestions.map((questionObj) => (
                    <option
                      key={questionObj.number}
                      value={questionObj.number}
                      className="gray-text"
                    >
                      {questionObj.number}. {questionObj.question}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="response" className="block mb-2 text-sm font-medium text-gray-900">Your answer</label>
                <input type="text" name="response" id="response" value={formData.response} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Answer to security question" required />
              </div>
              <button type="submit" className="bg-black w-full text-withe bg-primary-10900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
            </form>
            {mensaje && <p className="text-black">{mensaje}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
