import { MouseEventHandler } from "react"
export interface customButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
     MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
} 

