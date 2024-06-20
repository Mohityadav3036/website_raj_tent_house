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

const Galleryphoto: React.FC<FeaturedCoursesProps> = ({ img }) => {
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
        
      </BackgroundGradient>
        </div>


           
    </div>
  )
}

export default Galleryphoto
