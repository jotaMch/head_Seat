import React, { useState } from "react";/* 
import { Link } from 'react-router-dom'; */
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsHeadset } from "react-icons/bs";
import { Link } from 'react-router-dom'; 

const About = () => {

return(        
<div className="h-screen flex justify-between items-center flex-col">
    <Link to='/' className="text-neutral-400 flex justufy-start items-center w-10/12 h-32 backHeader">
        < BsHeadset className="h-8 w-8 " />
    </Link>
    <div className="w-6/12 h-2/6 duration-500 group overflow-hidden relative aboutShop
        rounded bg-neutral-900 text-neutral-50 p-4 flex flex-col justify-evenly"
        >
        <div className="
        absolute blur duration-500 group-hove:blur-none
        rounded-full group-hover:translate-x-12
        w-72 h-72 group-hover:translate-y-12 bg-gray-900 right-1 -bottom-24">            
        </div>
        <div className="
        absolute blur duration-500 group-hove:blur-none
        rounded-full group-hover:translate-x-12
        w-12 h-12 group-hover:translate-y-2 bg-red-400 right-12 bottom-12">            
        </div>
        <div className="
        absolute blur duration-500 group-hove:blur-none
        rounded-full group-hover:translate-x-12
        w-36 h-36 group-hover:-translate-y-12 bg-gray-700 right-1 -top-12">            
        </div>
        <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-red-400 rounded-full group-hover:-translate-x-12">            
        </div>
        <div className="z-10 flex flex-col justify-evenly w-full h-full">
            <h2 className="text-4xl">EletroHeadJM</h2>
                    <p>
                        Bem-vindo à nossa loja de eletrônicos especializada em headsets! 
                        Aqui, estamos dedicados a proporcionar a você uma experiência excepcional 
                        em compras de produtos de áudio.
                    </p>
                    <p>
                        Explore a nossa variedade de headsets projetados para elevar a sua 
                        experiência de áudio. Na nossa loja, você encontrará opções que combinam 
                        desempenho superior e design moderno.
                    </p>
                </div>
                <ul className="w-8/12 h-20 flex mx-auto justify-evenly z-10 items-center">
                    <li className="cursor-pointer">
                        < SlSocialInstagram className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
                    </li>
                    <li className="cursor-pointer">
                        < TiSocialFacebook className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
                    </li>
                    <li className="cursor-pointer">
                        < TiSocialTwitter className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
                    </li>
                    <li className="cursor-pointer">
                        < IoLogoWhatsapp className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
                    </li>
                </ul>
            </div>
            <footer className="bg-neutral-900 w-full">
                <p className="text-center py-5 text-neutral-300">
                    &copy; 2023 Loja de Eletrônicos EletroHeadJM
                </p>
            </footer>
        </div>
    )
}


export default About;