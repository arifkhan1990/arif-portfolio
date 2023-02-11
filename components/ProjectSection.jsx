import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const techTagColor = {
  'node.js': 'bg-red-500',
  'react.js': 'bg-orange-500',
  'express.js': 'bg-lime-500',
  php: 'bg-green-500',
  laravel: 'bg-yellow-500',
  mongodb: 'bg-cyan-500',
  mysql: 'bg-violet-500',
  tailwindcss: 'bg-teal-500',
  bootstarp: 'bg-amber-500',
  html5: 'bg-indigo-500',
  css3: 'bg-blue-500',
  openai: 'bg-pink-500',
  cloudinary: 'bg-emerald-500',
};
const projects = [
  {
    name: 'Fariwala Pizza Shop',
    description:
      'Fariwala is a local pizza shop, Huge people too mush love this local pizza brand.',
    image: '/fariwala.png',
    github: 'https://github.com/arifkhan1990/Fariwala-pizzashop',
    link: 'https://fariwala-pizza-shop.vercel.app/',
    technology: [
      { color: 'bg-red-500', title: 'Node.js' },
      { color: 'bg-orange-500', title: 'Express.js' },
      { color: 'bg-teal-500', title: 'React.js' },
      { color: 'bg-cyan-500', title: 'MongoDB' },
      { color: 'bg-blue-500', title: 'TailwindCss' },
      { color: 'bg-violet-500', title: 'Cloudinary' },
    ],
  },
  {
    name: 'AI-Image Generator',
    description:
      'AI-Image Generator is a web app that generates an appreciative AI images.',
    image: '/p4.png',
    github: 'https://github.com/arifkhan1990/agamir-ai-image-generator',
    link: 'https://agamir-ai-image-generator.vercel.app/',
    technology: [
      { color: 'bg-red-500', title: 'Node.js' },
      { color: 'bg-orange-500', title: 'Express.js' },
      { color: 'bg-teal-500', title: 'React.js' },
      { color: 'bg-cyan-500', title: 'MongoDB' },
      { color: 'bg-blue-500', title: 'TailwindCss' },
      { color: 'bg-violet-500', title: 'Cloudinary' },
      { color: 'bg-pink-500', title: 'OpenAI' },
    ],
  },
  {
    name: 'Metavers Clone',
    description: 'Metaverse Madness Site clone.',
    image: '/p3.png',
    github: 'https://github.com/arifkhan1990/metavers-clone-site',
    link: 'https://metavers-clone-site.vercel.app/',
    technology: [
      { color: 'bg-teal-500', title: 'React.js' },
      { color: 'bg-blue-500', title: 'TailwindCss' },
      { color: 'bg-indigo-500', title: 'Farmer Motion' },
      { color: 'bg-green-500', title: 'Vite' },
    ],
  },
  {
    name: 'GPT-3',
    description: "Let's Build Something amazing with GPT-3 OpenAI.",
    image: '/p2.png',
    github: 'https://github.com/arifkhan1990/gpt3_design',
    link: 'https://gpt3-design-seven.vercel.app/',
    technology: [
      { color: 'bg-teal-500', title: 'React.js' },
      { color: 'bg-yellow-500', title: 'CSS3' },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <div className='mt-12 md:pt-12'>
        <h1 className='my-10 text-center font-bold text-4xl'>
          Projects
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
          {projects.map((project, idx) => {
            return (
              <div key={idx} className='!mt-8'>
                <SlideUp offset='-300px 0px -300px 0px'>
                  <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                    <div className='md:w-1/2'>
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=''
                          width={1000}
                          height={1000}
                          className='rounded-xl shadow-xl hover:opacity-70'
                        />
                      </Link>
                    </div>
                    <div className='mt-0 md:w-1/2'>
                      <h1 className='text-3xl font-bold mb-6'>
                        {project.name}
                      </h1>
                      <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                        {project.description}
                      </p>
                      <div className='flex flex-row align-bottom space-x-4'>
                        <Link href={project.github} target='_blank'>
                          <BsGithub
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                        <Link href={project.link} target='_blank'>
                          <BsArrowUpRightSquare
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      </div>
                      <div className='!mt-4'>
                        <h1 className='text-center text-xl font-bold mb-2 md:text-left'>
                          Technology :
                        </h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start mb-4'>
                          {project.technology.map((techno, ix) => {
                            return (
                              <p
                                key={ix}
                                className={`px-2 py-2 mr-2 mt-2 text-sm text-white rounded-2xl font-normal ${techno.color}`}
                              >
                                {techno.title}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
