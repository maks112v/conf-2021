import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri';

interface FooterSliceProps {}

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Live Stream', href: '/live' },
    { name: 'Schedule', href: '/#schedule' },
    { name: 'Speakers', href: '/#speakers' },
  ],
  past: [
    { name: '2020 The Fight Within', href: 'https://2020.confva.com' },
    { name: '2019 The Rooted Life', href: 'https://2019.confva.com' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: RiFacebookCircleFill,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: RiInstagramFill,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: RiTwitterFill,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: RiGithubFill,
    },
  ],
};

export const FooterSlice: FunctionComponent<FooterSliceProps> = ({
  children,
}) => {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <img className='h-10' src='/logo.svg' alt={`God & Me`} />
            <p className='text-base text-gray-500'>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='w-6 h-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                {/* <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Solutions
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className='mt-12 md:mt-0'>
                {/* <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Support
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Pages
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.pages.map((item) => (
                    <li key={item.name}>
                      <Link href={item?.href} passHref>
                        <a className='text-base text-gray-500 hover:text-gray-900'>
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Past Conferences
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.past.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 mt-12 border-t border-gray-200'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; {new Date().getFullYear()} Molodezh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
