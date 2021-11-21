import { NavbarFragment } from '#graphql';
import { makeVar } from '@apollo/client';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
interface NavbarProps extends NavbarFragment {}

export const showNavBar = makeVar(true);

export const Navbar: FunctionComponent<NavbarProps> = ({ logo, items }) => {
  return (
    <Transition show={showNavBar()}>
      <div className='fixed left-0 right-0 z-50 px-4 top-3 lg:px-0'>
        <div className='flex items-center w-full p-4 mx-auto my-2 bg-white bg-opacity-50 rounded backdrop-filter backdrop-blur-md max-w-7xl'>
          <Link href='/'>
            <a className='duration-200 cursor-pointer hover:opacity-60'>
              <img src={logo?.url} className='w-10 h-10' />
            </a>
          </Link>
          <div className='flex-1' />
          <div className='flex items-center space-x-4'>
            {items?.map((item) =>
              item?.__typename === 'Page' ? (
                <Link key={item?.id} href={item?.slug} passHref>
                  <a className='font-semibold duration-200 hover:opacity-60 text-shades-90'>
                    {item?.title}
                  </a>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
};
