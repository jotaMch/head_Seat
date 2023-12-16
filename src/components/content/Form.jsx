import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Header from "../header/Header";

const FormContact = ({form}) => {
    
    return(
        <div style={{display: `${form}`}}  
        className="relative w-full h-screen p-4 msgSm
                    flex justify-center items-center">
            < Header />
            <div className="p-4 msgSm w-6/12  p-4">
                <form className={`flex flex-col w-full h-full text-white`}>
                    <input type="text" placeholder="your name" className=" h-14 w-full pl-2 rounded bg-transparent" />
                    <input type="email" placeholder="your email" className=" h-14 w-full pl-2 rounded bg-transparent" />
                    <textarea name="message" placeholder="your message" 
                    className=" h-14 w-full pl-2 rounded bg-transparent
                    resize-none" 
                    />
                    <button
                    className="flex justify-center items-center 
                                bg-lime-500 rounded-3xl text-[#000] h-14 mt-8" 
                    type="submit">Send < RiSendPlaneFill className="ml-2" /></button>
                </form>
            </div>
        </div>
    )
}

export default FormContact;