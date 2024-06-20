// 'use client'
import Link from 'next/link'
import React from 'react'
import whatsapp from "../image/whatsapp.png"
import mapimg from "../image/map.png"

import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient"
import Image from 'next/image';
function HeroSection() {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=23.8077797,76.8083921";
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
          <Spotlight
        className="-top-40  left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
                <h1
                  className="mt-20 md:mt-[100px] text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  "
                >Welcome to Raj Tent House</h1>
               
                <p
                 className="mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Let us transform your wedding into a celestial event. Our exquisite decor will make your special day as enchanting as the stars and as magical as the moon, creating an unforgettable celebration.</p>

<div className=" relative rounded- flex flex-col sm:flex-row top-10 justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl m-auto p-2">
  <HoverBorderGradient
    containerClassName="rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full"
    as="button"
    className="dark:bg-black rounded-lg bg-white text-black dark:text-white flex flex-col items-start p-2 space-y-4 border-2 border-cyan-950"
  >
    <h1 className="text-lg font-semibold flex flex-wrap">
      <span className="text-cyan-950">Pro: </span>
      <span className="text-black dark:text-white ml-1">RamBabu Yadav</span>
    </h1>
    <h1 className="text-lg font-semibold flex flex-wrap">
      <span className="text-cyan-950">Phone: </span>
      <span className="text-black dark:text-white ml-1">7828896244, 9685453036</span>
    </h1>
    <p className="text-lg flex flex-wrap">
      <span className="text-cyan-950">Address: </span>
      <span className="text-black dark:text-white ml-1">Pani ki Tanki ke Pass, Karanwas</span>
    </p>
    <div className=' flex flex-row items-center gap-[20px] m-auto justify-center  '>
    
      <a href="https://wa.me/917828896244?text=Hello How can I help you ?" target="_blank">
      <div className=' relative h-[50px] w-[50px] '>
      <Image
      src={whatsapp}
      alt='whatsapp image'
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
       
      />
      </div>
      </a>


      <a href={googleMapsDirectionsUrl} target="_blank">
      <div className=' relative h-[50px] w-[50px] '>
      <Image
      src={mapimg}
      alt='whatsapp image'
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
       
      />
      </div>
      </a>
     </div>
  </HoverBorderGradient>
</div>
           <div className='mt-[50px] relative'>
                <Link href={"/gallery"}>
                <Button
        borderRadius="1.75rem"
        className="  bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore More
      </Button>
                    
                </Link>
                </div>
      </div>


    </div>
  )
}
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeroSection
