
import React from 'react'
import Image from 'next/image'
import CustomButton from './ui/CustomButton'
import Link from 'next/link'
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  return (
    <div className='h-[13vh] flex items-center justify-center'>
      <div className='w-full h-[100%] flex items-center justify-center'>
        <div className=' flex w-[20%]  items-center gap-2'>
          <Image
           src="/logo.png"
           alt='logo'
           width={40}
           height={40}
          />
          <h1 className='text-custom-green font-bold text-[32px]'>RouteX</h1>
        </div>
        <div className='flex gap-4 transition-all items-center w-[60%] justify-center'>
         <Link href="" className='relative group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Home</span>
            <MdKeyboardArrowDown />
          </p>
          <div className='absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
            <Link href="" className='flex cursor-pointer items-center px-3'>
              Home 1
            </Link>
            <Link href="" className='flex cursor-pointer items-center px-3'>
              Home 2
            </Link>
          </div>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>About Us</span>
            <MdKeyboardArrowDown />
          </p>
          <div className='absolute right-0 top-20 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
        
          </div>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Services</span>
            <MdKeyboardArrowDown />
          </p>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Projects</span>
            <MdKeyboardArrowDown />
          </p>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Blog</span>
            <MdKeyboardArrowDown />
          </p>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Page</span>
            <MdKeyboardArrowDown />
          </p>
         </Link>
         <Link href="" className='group px-3 py-4 transition-all'>
          <p className='flex cursor-pointer gap-2 items-center text-custom-green text-lg font-semibold'>
            <span>Contact</span>
            <MdKeyboardArrowDown />
          </p>
         </Link>
        </div>
        <div className='w-[20%] flex justify-end items-center p-auto'>
           <CustomButton
            title='Get an Appointment'
            containerStyles="bg-custom-lemon w-[230px] h-[50px] text-white rounded-[32px] ml-2 border-[2px] border-gray-100"
            />
        </div>
      </div>
     
    </div>
  )
}

export default Nav