import React, { useState } from "react";
import { BsHeadset } from "react-icons/bs";
import { Link } from 'react-router-dom'; 

const Header = ({setForm}) => {
    const formContact = () => {
        setForm('flex');
    }

    return(        
        <>
            <header 
            className="
            flex justify-between fixed top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            z-10 items-center w-10/12 h-20 text-white"
            >
                <Link to='/'>
                    < BsHeadset className="h-8 w-8" />
                </Link>
                <ul className='flex w-2/12 navSm justify-around items-center'>
                    <Link to='/about'>
                        <li 
                        className="
                        hover:text-lime-500 cursor-pointer"
                        >
                            About
                        </li>
                    </Link>
                    <Link to='/message'>
                        <li 
                        onClick={() => formContact()}
                        className="
                        text-lime-500 border-lime-500 hover:bg-lime-500 cursor-pointer 
                        border rounded-3xl px-4 py-1 bg-transparent font-bold hover:text-white
                        "
                        >
                            contact
                        </li>
                    </Link>
                </ul>
            </header>    
            
        </>
    )
}


export default Header;