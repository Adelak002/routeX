import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton';
import { FaPlayCircle } from "react-icons/fa";

const HeroCard = () => {
  return (
    <div className='w-full  flex h-[60vh] bg-custom-green rounded-[30px] '> 
          <div className='flex  w-[50%]'>
            <div className='w-[50%] flex justify-end items-end mb-5'>
            <Image
         src="/paris.png"
         alt='paris'
         width={180}
         height={150}
         className='opacity-15'
        /> 
            </div>
            <div className='flex flex-col justify-center  gap-5 w-full'>
              <div>
              <h1 className='font-bold text-[60px] ml-[10px]  text-white'>Visa Made Easy Dreams Made Possible</h1>
              </div>
             <div className='flex  items-center gap-10'>
             <CustomButton
             title="Read More"
             containerStyles="bg-custom-green w-[160px] h-[60px] text-white rounded-[32px] ml-2 border-[2px] border-gray-100"
            />
             <span className='flex justify-center items-center gap-2'>
              <FaPlayCircle
                style={{background:"", color:"white"}}
                size={40}
              />
              <p className='text-white'>Watch Our Videos</p>
              </span>
             </div>
            </div>       
          </div>
          <div className='relative w-[50%] flex items-end'>
              <Image
              src="/Ellipse.png"
              alt='ellipse'
              width={500}
              height={500}
              >
              </Image>

                <Image
                 src="/paris.png"
                 alt='parisleft'
                 width={180}
                 height={150}
                 className='opacity-15 rotate-45 absolute left-[350px]'
                />
              </div>
             </div>
  )
}

export default HeroCard