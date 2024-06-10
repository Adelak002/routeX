"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { customButtonProps } from "../../../../types"
const CustomButton = ({title, containerStyles, handleClick, btnType,textStyles, rightIcon }: customButtonProps) => {
  return (
    <button 
     disabled= {false}
     type={btnType || "button"}
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}
    >
     <span className={"mr-2"}>{title}</span>
     <FaArrowRightLong />
    </button>
  )
}

export default CustomButton