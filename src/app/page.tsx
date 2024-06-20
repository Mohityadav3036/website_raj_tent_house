import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import img2 from "../image/main.jpg"
import img1 from "../../public/mohit1.jpg"
import img3 from "../image/image6.jpg"
import img4 from "../image/image9.jpg"
import img5 from "../image/img10.jpg"
import img6 from "../image/im4.jpg"
import About from "@/components/About";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import img0 from "../image/flex.jpg"
import img22 from "../image/gmain.jpg"


export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between antialiased bg-black/[0.96] p-24">
     <HeroSection/>
     <div className=" text-gray-400" >
      <h1 className="relative mt-10 text-4xl md:text-6xl lg:text-7xl mb-10 font-bold w-full m-auto flex justify-center items-center">GALLERY</h1>
     </div>
     <div className="flex flex-row flex-wrap m-auto justify-center w-full gap-[20px] ">
     <FeaturedCourses  img={img0}/>
     <FeaturedCourses  img={img2}/>
     <FeaturedCourses  img={img22}/>
     <FeaturedCourses  img={img1}/>
     
     <FeaturedCourses  img={img3}/>
     <FeaturedCourses  img={img4}/>
     <FeaturedCourses  img={img5}/>
     <FeaturedCourses  img={img6}/>
     </div>
    
    
      <div>
     <About/>   
     </div>  
     <div className=" w-[180%]">
      <Content/>
     </div>
     <div>
      <Footer/>
     </div>
   
    </main>
  );
}
