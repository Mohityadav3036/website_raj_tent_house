import About from '@/components/About'
import Footer from '@/components/Footer'
import React from 'react'

function page() {
  return (
    <>
    <div  className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mt-[150px] mx-auto py-10 md:py-0'>
        <About/>
      
    </div>
   
    </>
  )
}

export default page
