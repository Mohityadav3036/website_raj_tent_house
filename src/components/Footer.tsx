'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../image/ailogo.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=' w-[100%]  flex justify-center items-center mb-[-50px]'>
      <div className="flex justify-center items-center w-full">
        <Image
          src={logo}
          alt="mohit"
          width={100}
          height={100}
          className=" flex justify-center items-center cursor-pointer"
          onClick={scrollToTop}
        />
        <div className="mt-7 ml-4">
          <h1 className="  flex justify-center items-center text-3xl">
            Mohit Yadav ❤️ &copy; 2024
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
