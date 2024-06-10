import React from 'react'
import { wonderDAta } from '../../../../data/data'
import Image from 'next/image'
import { FcCheckmark } from "react-icons/fc";
import { wonderImages } from '../../../../data/data';

const WonderCard = () => {
  return (
    <div className='flex justify-around w-full'>
        {wonderDAta.map(({title,image,text1,text2}) =>(
            <div className='w-[350px] h-[205px] border-gray-300 border-[1px] rounded-[16px] p-5'>
                <div className='flex justify-venter items-center gap-3'>
                <div className='flex justify-center items-center rounded-full w-[60px] h-[60px] bg-custom-lemon'>
                 <Image
                 src={image}
                 alt='passport'
                 width={30}
                 height={24}
                 />
                </div>
                <h1 className='font-black text-[18px] text-custom-green '>{title}</h1>
                </div>
                
                <div className='flex mt-5 items-center gap-5'>
                <FcCheckmark
                 color='custom-green'
                />
                 <p className='font-normal text-[16px]'>{text1}</p>
                </div>
                <div className='flex mt-5 items-center gap-5'>
                <FcCheckmark
                color='custom-green'
                />
                 <p className='font-normal text-[16px]'>{text2}</p>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default WonderCard