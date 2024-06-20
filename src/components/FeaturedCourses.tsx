'use client'
import Image, { StaticImageData } from "next/image"
import courseData from "../data/music-courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import imgage1 from "../../public/mohit1.jpg"
// import image2 from "../image/image2.avif"
import image3 from "../image/image3.jpg"
// import image4 from "../image/image4.avif"


interface FeaturedCoursesProps {
  img: StaticImageData;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ img }) => {
  return (
    <div className=" flex flex-col">
     
        <div >
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div  className="relative w-[300px] h-[200px]">
        <Image
          src={img}
          alt="jordans"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        </div>
         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         Magnificent Event Stage Photos
        </p> 
 
        {/* <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p> */}
        {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </BackgroundGradient>
        </div>


           
    </div>
  )
}

export default FeaturedCourses
