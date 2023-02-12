'use client';
import React, { useState } from 'react';
import { sendContactForm } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Mail Come from Protfolio site',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
    }));

    try {
      await sendContactForm(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'Mail Come from Protfolio site',
      });
      showSuccessToastMessage();
    } catch (error) {
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'Mail Come from Protfolio site',
      });
      showErrorToastMessage();
    }
  };
  const showErrorToastMessage = () => {
    toast.error('Sorry! Send mail Unsuccessfull! !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showSuccessToastMessage = () => {
    toast.success('Thanks for share your opinion', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <section id='contact'>
      <div className='my-12 pb-12 md:pb-28'>
        <h1 className='text-center font-bold text-4xl'>Contact Us</h1>
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        <div className='flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label htmlFor='name' className='leading-7 text-sm'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label htmlFor='email' className='leading-7 text-sm'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label htmlFor='message' className='leading-7 text-sm'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div
                className={`p-2 w-full ${
                  formData.emai === '' ||
                  formData.name === '' ||
                  formData.message === ''
                    ? 'disabled:opacity-25'
                    : ''
                } `}
              >
                <button
                  className='disabled:opacity-75 w-58 flex mx-auto text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                  onClick={handleSubmit}
                >
                  Get in Touch
                </button>
                <ToastContainer
                  position='top-right'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
