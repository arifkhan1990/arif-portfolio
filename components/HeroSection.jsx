'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center my-10 pt-16 md:flex-row md:space-x-4 md:text-left'>
        <div className='md:w-1/2 md:mt-2'>
          <Image
            className='rounded-full shadow-2xl'
            src='/arif.jpeg'
            alt='arif'
            width={300}
            height={300}
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-xl mt-6 md:text-7xl md:mt-0'>
            Hi, I&#39;m Arif Khan!
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-xl tracking-wide'>
            I&#39;m a
            <span className='font-semibold text-teal-600'>
              {' '}
              Software Engineer{' '}
            </span>
            based in Dhaka, Bangladesh. Working towards creating software that
            makes life easier and more meaningful.Highly motivated, reliable and
            detail-oriented software engineer seeking new opportunities to use
            coding skills and talents to grow and expand organizational goals.
            Also, an innovative team player with a passion for continuous
            learning to develop and maintain challenging software applications.
          </p>
          {/* <Link to="/projects"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    My Projects
                </Link> */}

          <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
            <a
              href='https://github.com/arifkhan1990'
              rel='noreferrer'
              target='_blank'
            >
              <AiOutlineGithub
                className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                size={50}
              />
            </a>

            <a
              href='https://bd.linkedin.com/in/arif-khan-2b4b23118'
              rel='noreferrer'
              target='_blank'
            >
              <AiOutlineLinkedin
                className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                size={50}
              />
            </a>

            <a
              href='https://www.instagram.com/arif.khan.1990/'
              rel='noreferrer'
              target='_blank'
            >
              <AiOutlineInstagram
                className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                size={50}
              />
            </a>

            <a
              href='https://twitter.com/ArifKha22566065'
              rel='noreferrer'
              target='_blank'
            >
              <AiOutlineTwitter
                className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                size={50}
              />
            </a>
          </div>
        </div>
      </div>
      <div className='pb-8'>
        <Image
          src='/gitCube.png'
          alt='git'
          width={1000}
          height={1000}
          className='object-cover'
        />
        <p className='items-center justify-center flex'>
          <strong className='text-slate-300'>Pic : </strong>
          {'  '}
          <span className='text-slate-500'>Last Year Git Contributon</span>{' '}
        </p>
      </div>
      <div className='flex flex-row justify-center'>
        <Link
          to='/about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
