'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';

interface FormValues {
  email: string;
  numRes: string;
  response: string;
}

const Password2 = () => {
  const [mensaje, setMensaje] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <Formik<FormValues>
      initialValues={{
        email: '',
        numRes: '',
        response: ''
      }}
      validate={(values) => {
        const errors: Partial<FormValues> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.numRes) {
            errors.numRes = 'Required';
          }
        if (!values.response) {
            errors.response = 'Required';
          }
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await fetch('http://localhost:8080/api/forgotPassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          if (response.ok) {
            const data = await response.json();
            setMensaje('New password generated: ' + data.status);
          } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
          }
        } catch (error) {
          console.error('Error to send request:', error);
          setMensaje('Error to send request.');
        }
        resetForm();
      }}
    >
      {({ errors, touched, isValid }) => (

    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
      Tech Trend Emporium
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Forgot Your Password?</h1>
        <h3 className="leading-tight tracking-tight text-gray-900 dark:text-black">Please Enter the Email you use to log in and your recovery information.</h3>
      <Form className="space-y-4 md:space-y-6">
          <div>                  
           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
           <Field
             type="email"
             name="email"
             id="email"
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Enter your user email"
             required
           />
           <ErrorMessage name="email" component="div" className="error text-red-500 text-sm"  />
         </div>

         <div>
           <label htmlFor="securityQuestion" className="block mb-2 text-sm font-medium text-gray-900">Security Question</label>
           <Field
             as="select"
             name="numRes"
             id="numRes"
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required
           >
             <option value="" disabled>Select your question</option>
             {securityQuestions.map((questionObj) => (
               <option
                 key={questionObj.number}
                 value={questionObj.number}
               >
                 {questionObj.number}. {questionObj.question}
               </option>
             ))}
           </Field>
           <ErrorMessage name="numRes" component="div" className="error text-red-500 text-sm" />
         </div>

         <div>
           <label htmlFor="response" className="block mb-2 text-sm font-medium text-gray-900">Your answer</label>
           <Field
             type="text"
             name="response"
             id="response"
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Answer to security question"
             required
           />
           <ErrorMessage name="response" component="div" className="error text-red-500 text-sm" />
         </div>
         <button
            type="submit"
            className={`w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              isValid ? 'bg-black hover:bg-gray-900 focus:bg-gray-900' : 'bg-gray-300 cursor-not-allowed'
            }`}
            disabled={!isValid}
          >
            Submit
          </button>
          {mensaje && (
            <div>
                <p className=" text-center text-black">{mensaje}</p>
                {!mensaje.includes('Error') && (
                <button
                    onClick={() => router.push('/login')}
                    className="w-full text-white bg-black rounded-lg px-4 py-2 mt-4 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none"
                >
                    Go to Login
                </button>
                )}
            </div>
            )}

        </Form>
          </div>
        </div>
      </div>
      )}
    </Formik>
  );
};

export default Password2;
