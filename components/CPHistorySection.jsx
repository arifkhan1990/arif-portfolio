'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import ProblemSubmitStatus from './PieChart';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const judges = [
  {
    name: 'LeetCode',
    image: '/leetcode-logo.png',
    link: 'https://leetcode.com/arifkhan1990/',
    solved: 238,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 1521,
    max_contest_rating: 1521,
  },
  {
    name: 'CodeChef',
    image: '/codechef_logo.png',
    link: 'https://www.codechef.com/users/arif1990',
    solved: 159,
    country_rank: 853,
    global_rank: 34118,
    contest_rating: 1541,
    max_contest_rating: 1596,
  },
  {
    name: 'Beecrowd',
    image: '/uri-logo.png',
    link: 'https://www.beecrowd.com.br/judge/en/users/statistics/59304',
    solved: 734,
    country_rank: 12,
    global_rank: 253,
    contest_rating: 'N / A',
    max_contest_rating: 'N / A',
  },
  {
    name: 'Codeforces',
    image: '/codeforces_logo.png',
    link: 'https://codeforces.com/profile/arif77e8',
    solved: 120,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 1506,
    max_contest_rating: 1506,
  },
  //   {
  //     name: 'Spoj',
  //     image: '/spoj_logo.png',
  //     link: 'https://www.spoj.com/users/arif77/',
  //     solved: 4,
  //     country_rank: "N / A",
  //     global_rank: "N / A",
  //     contest_rating: "N / A",
  //     max_contest_rating: "N / A",
  //   },
  {
    name: 'AtCoder',
    image: '/atcoder_logo.png',
    link: 'https://atcoder.jp/users/Arif77',
    solved: 35,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 138,
    max_contest_rating: 138,
  },
  {
    name: 'Hackerearth',
    image: '/hackerearth_logo.png',
    link: 'https://www.hackerearth.com/users/arifkhanshubro',
    solved: 145,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 1539,
    max_contest_rating: 1539,
  },
  {
    name: 'Hackerrank',
    image: '/hackerrank_logo.png',
    link: 'https://www.hackerrank.com/Arif',
    solved: 130,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 1831,
    max_contest_rating: 1831,
  },
  {
    name: 'UVA',
    image: '/uva_logo.png',
    link: 'https://uhunt.onlinejudge.org/id/780655',
    solved: 225,
    country_rank: 'N / A',
    global_rank: 'N / A',
    contest_rating: 'N / A',
    max_contest_rating: 'N / A',
  },
];
const CPHistorySection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <section id='cp_history'>
      <div className='mt-12 md:pt-12'>
        <h1 className='my-10 text-center font-bold text-4xl'>
          CP History
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
          <div className=' md:w-1/2'>
            <h2 className='text-semibold text-cnter text-lg'>Judge Accuracy</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-3'>
              {judges.map((judge, idx) => {
                return (
                  <div key={idx}>
                    <div className='flex flex-row'>
                      <div className='md:w-1/3'>
                        <Link href={judge.link}>
                          <Image
                            src={judge.image}
                            alt=''
                            width={300}
                            height={300}
                            className='rounded-tl-xl rounded-bl-xl sm:rounded-tl-xl shadow-xl hover:opacity-70'
                          />
                        </Link>
                      </div>
                      <div className='md:w-2/3 border-none rounded-tr-xl rounded-br-xl sm:rounded-tr-xl sm:rounded-br-xl shadow-2xl bg-green-100 text-xs font-bold text-neutral-800 pl-2 pt-2'>
                        <p className='md:text-left text-center'>
                          Solved : {judge.solved}
                        </p>
                        <p className='md:text-left text-center'>
                          Rating : {judge.contest_rating}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='md:w-1/2'>
            <ProblemSubmitStatus
              textColor={`${currentTheme !== 'dark' ? 'black ' : 'white'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPHistorySection;
