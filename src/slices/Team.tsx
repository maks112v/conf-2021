import React, { FunctionComponent } from 'react';
import { RiUser2Line } from 'react-icons/ri';

interface TeamSliceProps {}

const people = [
  {
    name: 'Vladimir Minyakov',
    role: 'Kansas City, KA',
    imageUrl: '/speakers/vladimir-minyakov.png',
  },
  {
    name: 'Mikhail Sysoev',
    role: 'Ukraine',
    imageUrl: '/speakers/mikhail-sysoev.png',
  },
  {
    name: 'Mikhail Golubin',
    role: 'Russia',
    imageUrl: '',
  },
  {
    name: 'Oleg Artemyev',
    role: 'Harrisonburg, VA',
    imageUrl: '/speakers/oleg-artemyev.jpg',
  },
  {
    name: 'Anton Artemyev',
    role: 'Harrisonburg, VA',
    imageUrl: '/speakers/anton-artemyev.png',
  },
];

export const TeamSlice: FunctionComponent<TeamSliceProps> = ({ children }) => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
        <div className='space-y-5 sm:space-y-4'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Meet our Speakers
          </h2>
          <p className='text-xl text-gray-500'>
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
          </p>
        </div>
        <div className='lg:col-span-2'>
          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  {person.imageUrl ? (
                    <img
                      className='w-16 h-16 rounded-full shadow lg:w-20 lg:h-20 bg-gray-50'
                      src={person.imageUrl}
                      alt=''
                    />
                  ) : (
                    <div className='flex items-center justify-center w-16 h-16 rounded-full shadow bg-gray-50 lg:w-20 lg:h-20'>
                      <RiUser2Line className='w-8 h-8 text-gray-700' />
                    </div>
                  )}
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>{person.name}</h3>
                    <p className='text-blue-500'>{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* This example requires Tailwind CSS v2.0+ */
