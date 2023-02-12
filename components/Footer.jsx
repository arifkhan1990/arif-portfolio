import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl md:mt-[50px]'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
          @ 2023 Arif Khan{' '}
          <a
            href='/'
            className='hover:unde
            '
          ></a>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <a
            href='https://github.com/arifkhan1990'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>

          <a
            href='https://bd.linkedin.com/in/arif-khan-2b4b23118'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>

          <a
            href='https://www.instagram.com/arif.khan.1990/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineInstagram
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>

          <a
            href='https://twitter.com/ArifKha22566065'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineTwitter
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
