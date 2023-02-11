import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
  const skills = [
    { skill: 'Javascript' },
    { skill: 'Node.js' },
    { skill: 'React.js' },
    { skill: 'MongoDB' },
    { skill: 'Php' },
    { skill: 'Laravel' },
    { skill: 'JQuery' },
    { skill: 'Ajax' },
    { skill: 'Git' },
    { skill: 'Github' },
    { skill: 'TailwindCss' },
    { skill: 'Bootstrap' },
    { skill: 'CSS' },
    { skill: 'HTML' },
    { skill: 'Jira' },
  ];
  return (
    <section id='about'>
      <div className='my-8'>
        <h1 className='text-center font-bold text-4xl'>About Me</h1>
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        <div className='flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Hi, my name is Arif Khan and I am a
              <span className='font-bold'> highly ambitious </span>,
              <span className='font-bold'> self-motivated </span>, and
              <span className=''> driven </span> Software Engineer based in
              Dhaka, Bangladesh.
            </p>
            <br />
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              Software Company, a start-up, a huge corporation, and a software
              solution services. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently shared a
              projects code that covers everything you need to build a web app
              with the Restfull API using Node & React & Taildwind & NextJs &
              MongoDB.
            </p>

            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className='grid grid-rows-4 grid-flow-col gap-4 gap-[0px 10px] p-0 m-[20px 0px 0px] overflow-hidden list-none'>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Mongodb</li>
              <li>Node.js</li>
              <li>MySql</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              My Skills
            </h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image src="/arif.jpeg" al="" width={325} height={325}
                        className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 shadow-lg rounded-md" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
