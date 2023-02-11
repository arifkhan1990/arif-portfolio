import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
const ExperienceSection = () => {
  return (
    <section id='experiences'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Experiences
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col space-y-28'>
        <div className='mt-2'>
          <SlideUp offset='-300px 0px -300px 0px'>
            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
              <div className='mt-2 md:w-3/4'>
                <div className='display-flex flex-column full-width align-self-center'>
                  <div className='display-flex flex-row justify-space-between'>
                    <div className='display-flex flex-column full-width'>
                      <div className='display-flex align-items-center my-3'>
                        <span className='mr-2 text-bold text-2xl'>
                          <span aria-hidden='true'>
                            Full Stack Software Engineer, MERN
                          </span>
                        </span>
                      </div>
                      <div>
                        <span className='text-lg text-normal'>
                          <span aria-hidden='true'>
                            ShellBeeHaken Ltd. · Full-time
                          </span>
                        </span>
                      </div>
                      <div className='text-gray'>
                        <span className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                          <span aria-hidden='true'>
                            Feb 2023 - Present · 1 mo
                          </span>
                        </span>
                      </div>
                      <div>
                        <span className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                          <span aria-hidden='true'>
                            Mirpur, Dhaka, Bangladesh · On-site
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className='pvs-entity__action-container'></div>
                  </div>

                  <div className='pvs-list__outer-container'>
                    <ul className='pvs-list'>
                      <li className=' '>
                        <div className='pvs-list__outer-container'>
                          <ul className='pvs-list'>
                            <li className='pvs-list__item--with-top-padding '>
                              <div className='display-flex '>
                                <div className='display-flex full-width'>
                                  <div className='pv-shared-text-with-see-more full-width text-[14px] text-normal t-black display-flex align-items-center'>
                                    <div
                                      className='text-[16px] inline-show-more-text inline-show-more-text--is-collapsed full-width line-height[1.9rem] max-height[3.8rem]'
                                      tabIndex={-1}
                                    >
                                      <span
                                        aria-hidden='true'
                                        className='text-slate-300'
                                      >
                                        <strong>Skills:</strong>
                                        <span className='white-space-pre'>
                                          {' '}
                                        </span>
                                        Bitbucket · Jira · REST APIs ·
                                        Express.js · React.js · Node.js ·
                                        MongoDB
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='md:w-1/4 sm:mt-3'>
                <div className='p-4 sm:pt-8'>
                  <Link href='https://shellbeehaken.com/' target='_blank'>
                    <Image
                      src='/shellbeehaken.jpeg'
                      alt=''
                      width={1000}
                      height={1000}
                      className='rounded-xl shadow-xl hover:opacity-70'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        <div className='!mt-2'>
          <SlideUp offset='-300px 0px -300px 0px'>
            <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
              <div className='mt-2 md:w-3/4'>
                <div className='display-flex flex-column full-width align-self-center'>
                  <div className='display-flex flex-row justify-space-between'>
                    <a
                      data-field='experience_company_logo'
                      className='optional-action-target-wrapper display-flex flex-column full-width'
                      target='_self'
                      href='https://www.linkedin.com/company/13467190/'
                    >
                      <div className='display-flex items-center my-3'>
                        <span className='mr-2 text-bold text-2xl'>
                          <span aria-hidden='true'>ENTERTECH - Dhaka,BD</span>
                        </span>
                      </div>
                      <div className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                        <span aria-hidden='true'>Full-time · 3 yrs 10 mos</span>
                      </div>
                      <div className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                        <span aria-hidden='true'>Dhaka, Bangladesh</span>
                      </div>
                    </a>

                    <div className='pvs-entity__action-container'></div>
                  </div>

                  <div className='pvs-list__outer-container mt-5 ml-5'>
                    <ul className='pvs-list'>
                      <li className='mt-4'>
                        <span className='pvs-entity__path-node'></span>
                        <div className='pvs-entity pvs-entity--with-path'>
                          <div>
                            <div
                              className='display-flex'
                              tabIndex={-1}
                              aria-hidden='true'
                            ></div>
                          </div>

                          <div className='display-flex flex-column full-width align-self-center'>
                            <div className='display-flex flex-row justify-space-between'>
                              <div className='display-flex align-items-center'>
                                <span className='mr-2 text-semibold text-xl'>
                                  <span aria-hidden='true'>
                                    Sr. Software Engineer
                                  </span>
                                </span>
                              </div>
                              <div className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                                <span aria-hidden='true'>
                                  Jan 2022 - Jan 2023 · 1 yr 1 mo
                                </span>
                              </div>
                              <div className='pvs-entity__action-container'></div>
                            </div>

                            <div className='pvs-list__outer-container'>
                              <ul className='pvs-list'>
                                <li className=' '>
                                  <div className='pvs-list__outer-container'>
                                    <ul className='pvs-list'>
                                      <li className='pvs-list__item--with-top-padding '>
                                        <div className='display-flex '>
                                          <div className='display-flex full-width'>
                                            <div className='pv-shared-text-with-see-more full-width text-[14px] text-normal t-black display-flex align-items-center'>
                                              <div
                                                className='line-height[1.9rem] max-height[3.8rem] inline-show-more-text inline-show-more-text--is-collapsed full-width'
                                                tabIndex={-1}
                                              >
                                                <span
                                                  aria-hidden='true'
                                                  className='text-slate-300'
                                                >
                                                  <strong>Skills:</strong>
                                                  <span className='white-space-pre'>
                                                    {' '}
                                                  </span>
                                                  REST APIs · Database Design ·
                                                  PHP · Laravel · MySQL ·
                                                  React.js · Node.js · MongoDB
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className='mt-4'>
                        <span className='pvs-entity__path-node'></span>
                        <div className='pvs-entity pvs-entity--with-path'>
                          <div>
                            <div
                              className='display-flex'
                              tabIndex={-1}
                              aria-hidden='true'
                            ></div>
                          </div>

                          <div className='display-flex flex-column full-width align-self-center'>
                            <div className='display-flex flex-row justify-space-between'>
                              <div className='display-flex items-center'>
                                <div className='mr-2 text-semibold'>
                                  <span aria-hidden='true'>
                                    Software Engineer
                                  </span>
                                </div>
                              </div>
                              <div className='text-[16px] text-normal text-neutral-600 dark:text-neutral-400'>
                                <span aria-hidden='true'>
                                  Jul 2020 - Dec 2021 · 1 yr 6 mos
                                </span>
                              </div>

                              <div className='pvs-entity__action-container'></div>
                            </div>

                            <div className='pvs-list__outer-container'>
                              <ul className='pvs-list'>
                                <li className=' '>
                                  <div className='pvs-list__outer-container'>
                                    <ul className='pvs-list'>
                                      <li className='pvs-list__item--with-top-padding '>
                                        <div className='display-flex '>
                                          <div className='display-flex full-width'>
                                            <div className='pv-shared-text-with-see-more full-width text-[14px] text-normal t-black display-flex align-items-center'>
                                              <div
                                                className='line-height[1.9rem] max-height[3.8rem] inline-show-more-text inline-show-more-text--is-collapsed full-width'
                                                tabIndex={-1}
                                              >
                                                <span
                                                  aria-hidden='true'
                                                  className='text-slate-300'
                                                >
                                                  <strong>Skills:</strong>
                                                  <span className='white-space-pre'>
                                                    {' '}
                                                  </span>
                                                  Debugging · Web Design · Web
                                                  Development · JavaScript · PHP
                                                  · Laravel
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className='mt-4'>
                        <span className='pvs-entity__path-node'></span>
                        <div className='pvs-entity'>
                          <div>
                            <div
                              className=' display-flex'
                              tabIndex={-1}
                              aria-hidden='true'
                            ></div>
                          </div>

                          <div className='display-flex flex-column full-width align-self-center'>
                            <div className='display-flex flex-row justify-space-between'>
                              <div className='display-flex items-center'>
                                <div className='mr-2 text-semibold'>
                                  <span aria-hidden='true'>
                                    Jr. Software Engineer
                                  </span>
                                </div>
                              </div>
                              <div className='text-[16px] text-neutral-600 dark:text-neutral-400'>
                                <span aria-hidden='true'>
                                  Apr 2019 - Jun 2020 · 1 yr 3 mos
                                </span>
                              </div>

                              <div className='pvs-entity__action-container'></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='md:w-1/4 sm:mt-5'>
                <div className='p-4 sm:pt-8'>
                  <Link href='https://entertechbd.com/' target='_blank'>
                    <Image
                      src='/entertech.jpeg'
                      alt=''
                      width={1000}
                      height={1000}
                      className='rounded-xl shadow-xl hover:opacity-70'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
