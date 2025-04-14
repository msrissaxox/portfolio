'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

type Inputs = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  // exampleRequired: string
  // example: string
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const templateParams = {
      user_name: `${data.firstName} ${data.lastName}`, // Combine first and last name
      user_email: data.email,
      message: data.message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gray-100 p-6 md:flex-row md:gap-10 md:p-10">
      <Image
        src="/contactme.png"
        alt="Logo"
        width={320}
        height={250}
        className="mb-4"
        style={{ objectFit: 'contain' }}
      />
      {/* <form onSubmit={handleSubmit(onSubmit)} className="flex-1 max-w-lg p-6 bg-white rounded-xl shadow-md space-y-4 "> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 max-w-none md:max-w-lg p-6 bg-white rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            {...register('firstName', { required: 'This is required' })}
            placeholder="Marissa"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register('lastName', { required: 'This is required' })}
            placeholder="Lamothe"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register('email', { required: 'Email Address is required' })}
            placeholder="marissa@example.com"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
  )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            {...register('message', { required: 'This is required' })}
            placeholder="Let's work together."
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
