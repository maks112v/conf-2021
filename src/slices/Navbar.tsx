import React, { FunctionComponent } from 'react';

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = ({ children }) => {
  return (
    <div className='fixed left-0 right-0 z-50 px-4 top-3 lg:px-0'>
      <div className='flex items-center w-full p-4 mx-auto my-2 bg-white rounded shadow max-w-7xl'>
        <img src='/logo.svg' className='w-10 h-10' />
        <div className='flex-1' />
      </div>
    </div>
  );
};
