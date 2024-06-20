import Galleryphoto from '@/components/Galleryphoto'
import React from 'react'
import img0 from "../../image/flex.jpg"
import img22 from "../../image/gmain.jpg"
import img from "../../image/image3.jpg"
import img2 from "../../image/2WWiba97r1cqedn9tiHPLL1wpQXqKE3jz0jlDlsc(1).jpg"
import img3 from "../../image/image6.jpg"
import img4 from "../../image/home-decoration-light-services.webp"
import img5 from "../../image/image2.jpg"
import img6 from "../../image/image5.jpg"
import img7 from "../../image/image7.jpg"
import img8 from "../../image/main.jpg"
import img9 from "../../image/image9.jpg"
import img10 from "../../image/img10.jpg"
import img11 from "../../image/img11.jpg"
import img12 from "../../image/imh12.jpg"
import imgs1 from "../../image/sound1.jpg"
import imgs2 from "../../image/sound2.jpeg"
import imgs3 from "../../image/sound3.jpg"
import imgl1 from "../../image/light.jpg"
import Footer from '@/components/Footer'
function page() {
  return (
    <div className='relative mt-[200px] '>
    <h1 className="relative w-[80%] mt-10 text-4xl md:text-6xl lg:text-7xl mb-10 font-bold  m-auto flex justify-center items-center" >Raj Tent House  Dj Sound  and Light decoration</h1>
    <div className=" flex flex-row flex-wrap m-auto justify-center w-full gap-[20px] ">
    <Galleryphoto img={img0}/>
      <Galleryphoto img={img}/>
      <Galleryphoto img={img22}/>
      <Galleryphoto img={img3}/> 
      <Galleryphoto img={img5}/>
      <Galleryphoto img={img6}/>
      <Galleryphoto img={img7}/>
      <Galleryphoto img={img8}/>
      <Galleryphoto img={img9}/> 
      <Galleryphoto img={img10}/>
      <Galleryphoto img={img11}/>
      <Galleryphoto img={img12}/>
      <Galleryphoto img={img4}/>
      <Galleryphoto img={img2}/>
      <Galleryphoto img={imgl1}/>
      <Galleryphoto img={imgs1}/>
      <Galleryphoto img={imgs2}/>
      <Galleryphoto img={imgs3}/>
    </div>
    <Footer/>
    </div>
    
  )
}

export default page
