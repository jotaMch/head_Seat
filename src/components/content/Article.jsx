import React, { useState } from "react";
import { CgStopwatch } from "react-icons/cg";

const Article = ({ newImg, numberValue, price, inf, about, content }) => {
    const [ advanced, setAdvanced ] = useState(true);
    const [ hiddenImg, setHiddenImg ] = useState(false);
    const [ textButton, setTextButton ] = useState('Advance');
    const [ promocao ] = useState('Promoção ativa até às 12:00:00');
    

    const comprar = () => {
        setAdvanced(false)
        setHiddenImg(true)
        setTextButton('Buy product')
    }
    return(
        <div className='h-full flex items-center w-10/12 responsive relative'>
            <article 
            className='h-4/6 w-full flex justify-around items-center border-x 
            border-[#ffffff57]'>
                {content && (
                    <>
                    
                        <div className={`smartphone w-4/12 flex flex-col justify-cenyter
                            ${!advanced?'items-center':'items-start'}`}>
                            {advanced && (
                                <>
                                    <h2 className="text-4xl text-red-400 mb-10">{inf}</h2>
                                    <p className="text-white text-sm ">
                                        {about}
                                    </p>
                                </>
                            )}
                            {!advanced && (
                                <div className="text-center">
                                    <div className="h-6 flex justify-center items-end">
                                            <p className="text-red-400 h-6 flex items-end">{promocao}</p>
                                            <p className="text-red-400 font-bold ">
                                                <CgStopwatch className="w-6 h-6"/>
                                            </p>
                                    </div>
                                    <img src={newImg} 
                                    className="smartphone w-full " />
                                    <p className="text-[#ffffff57] text-sm">
                                        {inf}
                                    </p>
                                    <p className="text-[#565656be] line-through">
                                        $500,00
                                    </p>
                                    <p className="text-[#ffffff57] text-sm">
                                        {price}
                                    </p>
                                </div>
                            )}

                            <button
                            onClick={() => comprar()}
                            className="
                            relative px-8 py-2 rounded-3xl bg-transparent isolation-auto 
                            z-10 border border-white hover:border-lime-500 before:absolute 
                            before:w-full before:transition-all before:duration-700 
                            before:hover:w-full before:-left-full before:hover:left-0 
                            before:rounded-full before:bg-lime-500 before:-z-10 
                            before:aspect-square before:hover:scale-150 overflow-hidden 
                            before:hover:duration-700 hover:text-white hover:font-bold text-white mt-6"
                            >
                            {textButton}
                            </button>

                        </div>
                        {!hiddenImg && (
                        <img src={newImg} className=" smartphone w-3/12 h-3/6 prodFilter" />
                        )}
                    </>
                )}
            </article>
            <p className="
                absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-lime-500 text-2xl ftn ">
                {numberValue}/<span className="text-white text-xs">04</span>
            </p>
        </div>
    )
}

export default Article;