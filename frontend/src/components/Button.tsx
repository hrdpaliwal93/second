import type { ReactElement } from "react";

 interface ButtonProps{
    variant:"primary" | "secondary",
    text:String,
    icon?:ReactElement,
    onClick?: ()=>void
    
}


function Button(props:ButtonProps){
    return <>
            <button className={props.variant == "primary" ?'bg-black' : 'bg-red-100'}>{props.text}</button>
    </>
}
export default Button

