'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import BasicModal from './Modal';



type Inputs = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
};

export default function Contact() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Form data:', data); // Debug: Log the form data

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
    };
    
    console.log('Sending email with data:', templateParams);
   
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          // console.log('Email sent successfully:', result.text);
          // alert(
          //   'Thank you for your message! I will get back to you as soon as possible.'
          // );
          setModalOpen(true); // Open the modal
          reset();
        },
        (error) => {
          console.log('EmailJS error:', error.text || error);
          alert('There was an error sending your message. Please try again.');
        }
      );
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 max-w-none md:max-w-lg p-6 bg-white rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            {...register('firstName', {
              required: 'This is required',
              validate: (value) =>
                value.trim() !== '' || 'Field Name cannot be empty',
            })}
            placeholder="Marissa"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register('lastName', {
              required: 'This is required',
              validate: (value) =>
                value.trim() !== '' || 'Field Name cannot be empty',
            })}
            placeholder="Lamothe"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register('email', { required: 'Email Address is required' })}
            placeholder="marissa@example.com"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
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
            {...register('message', {
              required: 'This is required',
              validate: (value) =>
                value.trim().length >= 15 ||
                'Message must be at least 15 characters long',
            })}
            placeholder="Let's work together."
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-800 focus:border-green-800"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
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
      <BasicModal
        open={modalOpen} onClose={() => setModalOpen(false)}
      />
  
    </div>
  );
}
