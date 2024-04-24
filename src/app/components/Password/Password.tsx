'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Password = () => {
    
  const securityQuestions = [
    'What is your mother\'s maiden name?',
    'What was the name of your first pet?',
    'What city were you born in?',
    'What is the name of your favorite teacher?',
    'What is your favorite movie?',
    'What is your favorite book?',
    'What is the name of your childhood best friend?',
    'What is your favorite color?',
    'What is the make and model of your first car?',
    'What is your favorite food?'
  ];
  const [formData, setFormData] = useState({
    email: '',
    securityQuestion: '',
    response: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Your form submission logic here
    } catch (error) {
      console.error('Error to send request:', error);
      setMensaje('Error to send request.');
    }
  };


  return (
    <section className="bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          Tech Trend Emporium
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Forgot Your Password?</h1>
            <h3 className="leading-tight tracking-tight text-gray-900 dark:text-black">Please Enter the Email you use to log in and your recovery information.</h3>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-900">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your user email" required />
              </div>
              <div>
                <label htmlFor="securityQuestion" className="block mb-2 text-sm text-gray-900">Security Question</label>
                <select name="securityQuestion" id="securityQuestion" value={formData.securityQuestion} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value="">Select your question</option>
                  {securityQuestions.map((question, index) => (
                    <option key={index} value={question}>{question}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="response" className="block mb-2 text-sm text-gray-900">Question answer</label>
                <input type="text" name="response" id="response" value={formData.response} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type the answer for the question" required />
              </div>
              <button type="submit" className="bg-black w-full text-withe bg-primary-10900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
