import React from 'react';
import Aboutphoto from './Aboutphoto';
import img from "../image/image3.jpg";
import img1 from "../image/papa.JPG"

function About() {
  return (
    <div className="w-full py-10">
      <h1 className="relative mt-10 text-4xl md:text-6xl lg:text-7xl mb-10 font-bold w-full m-auto flex justify-center items-center">ABOUT</h1>
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row m-auto gap-10">
        <div className="flex justify-center md:justify-start">
          <Aboutphoto img={img1} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4">Welcome to <span className=' text-green-500 font-bold'>Raj Tent House</span> , where celebrations come to life in <span className=' text-green-500 font-bold'>Karanwas</span> under the expert guidance of <span className=' text-green-500 font-bold' >Mr. Rambabu Yadav</span> . For over a decade, Raj Tent House has been a cornerstone of unforgettable events.</p>
          <p className="mb-4">Conveniently situated near <span className=' text-green-500 font-bold'>Pani ki Tanki ke pass, Karanwas</span>. Our longstanding commitment to excellence shines through our meticulous attention to detail and personalized service. We pride ourselves on transforming your special occasions into cherished memories.</p>
          <p className="mb-4">With more than 10 years of industry expertise, Raj Tent House continues to innovate. We now offer an expanded range of services including the latest in <span className=' text-green-500 font-bold'>light decoration and state-of-the-art DJ sound systems</span> . These new offerings complement our signature tent setups, ensuring your event is both stunning and seamless.</p>
          <p className="mb-4">At Raj Tent House, our mission is simple: to exceed your expectations every time. Whether it's a <span className='text-green-500 font-bold'>wedding, birthday, or corporate event</span> , our dedicated team is here to make your vision a reality. Explore our services and discover why Raj Tent House is your partner in creating unforgettable experiences.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
