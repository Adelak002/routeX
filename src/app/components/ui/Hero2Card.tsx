import React from "react";
import Image from "next/image";
import { hero2CardData } from "../../../../data/data";


const Hero2Card = () => {
    return(
        <div className="flex flex-wrap justify-between">
            {hero2CardData.map(({title,image,text}) =>(
                <div className="w-[570px] h-[330px] border-[1px] border-gray-300 rounded-[16px] px-5 py-10">
                    <div className="rounded-full w-[100px] h-[100px] bg-custom-lemon flex justify-center items-center"> 
                      <Image
                      src={image}
                      alt="food"
                      width={40}
                      height={40}
                      /> 
                    </div>
                <h1 className="font-black text-[18px] text-custom-green mt-10">{title}</h1>
                <p className="mt-5 font-medium text-gray-400 text-[14px]">{text}</p>
                </div>
            )
            )}
        </div>
    )

};

export default Hero2Card;
