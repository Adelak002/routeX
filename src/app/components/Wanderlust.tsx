import React from 'react'
import Image from 'next/image'
import WonderCard from './ui/WonderCard'
import CustomButton from './ui/CustomButton'
import { FaPhoneAlt } from "react-icons/fa";
import { wonderImages } from '../../../data/data';
import Link from 'next/link';

type Props = {}

const Wanderlust = (props: Props) => {
  return (
    <div className='w-full h-[80vh] flex flex-col px-40 '>
    <div className='w-full h-full flex'>
        <div className='flex w-[80%] h-full'>
            <div className='flex flex-col items-end px-[30px] w-[50%]'>
            <div className='h-[357px] w-[207px] bg-[#D9D9D9] border-[1px]  rounded-[16px]'>
             </div>
             <Image
             src="/agency.png"
             alt='agency'
             width={206}
             height={206}
             className='mt-10'
             />
            </div>
            <div className=''>
                <div className='w-[282px] flex   h-[127px] bg-custom-lemon rounded-[16px] p-10'>
                    <h1 className='font-extrabold text-white text-[40px]'>25</h1>
                    <p className='font-normal text-white text-[20px] text-center'>Years Of experience</p>
                </div>
                <div className='h-[464px] w-[282px] mt-4 bg-[#D9D9D9] border-[1px] rounded-[16px]'>
             </div>

            </div>
            
        </div>
        <div className=' w-full h-full px-[50px]'>
             <div className='flex gap-2 mb-5'>
                <Image
                 src="/cap.png"
                 alt='cap'
                 width={20}
                 height={20}
                />
                <h1 className='font-extrabold text-[14px] text-custom-green'>WHY CHOOSE US</h1>
             </div>
             <span className='capitalize'><h1 className='font-extrabold text-[50px]'>where wonderlust meets </h1> <h1 className='font-extrabold text-[50px] text-custom-green'>dream destinations</h1> </span>
         <p className='font-normal text-[16px] mt-5 capitalize text-[#d9d9d9]'>Et purus duis sollicitudin dignissim habitant.
             Egestas nulla quis venenatis cras sed eu massa
             Et purus duis sollicitudin dignissim habitant.
             Egestas nulla quis venenatis cras sed eu massa
              Et purus duis sollicitudin dignissim habitant.
               Egestas nulla
            </p>

            <div className='mt-10'>
                <WonderCard/>
                <div className='flex mt-5 ml-4'>
                <CustomButton
                   title='Read More'
                   containerStyles='w-[157px] h-[60px] border-[1px] border-custom-lemon rounded-[16px] mr-10 '
                   textStyles='text-custom-green'
                   rightIcon='custom-green'
                  />
                  <div className='w-[55px] h-[55px] rounded-full bg-custom-lemon flex justify-center items-center'>
                    <FaPhoneAlt
                     color='white'
                    />
                  </div>
                  <div className='ml-3'>
                  <h3 className='font-normal text-[17px] text-custom-green'>Need Help?</h3>
                  <h1 className='font-bold text-[17px] text-custom-green'>(808) 555-0111</h1>
                  </div>
                  
                </div>
                
            </div>
    </div>
           
    </div>
    {wonderImages.map(({image1,image2,image3,image4,image5}) =>(
                    <div className='flex justify-around items-center'>
                        <Link
                        href="/segment.png"
                        >
                        <Image
                         src={image1}
                         alt='image1'
                         width={171}
                         height={48}
                        />
                        </Link>
                        <Link
                        href="/splunk.png"
                        >
                        <Image
                         src={image2}
                         alt='image1'
                         width={108}
                         height={48}
                        />
                         </Link>
                         <Link href="/hubspot.png">
                         <Image
                         src={image3}
                         alt='image1'
                         width={114}
                         height={48}
                        />
                         </Link>
                         <Link href='/asana.png'>
                         
                        <Image
                         src={image4}
                         alt='image4'
                         width={127}
                         height={48}
                        />
                        </Link>
                        <Link href='/airtasker.png'>
                        <Image
                         src={image5}
                         alt='image5'
                         width={144}
                         height={48}
                        />
                        </Link>

                    </div>
                ))}
    </div>
  )
}

export default Wanderlust