import React, { useState } from "react";
import Article from "./Article";
import Select from "./selected/select";
import Social from "./social/Social";
import HeadPhones from "../../assets/headphones.png";
import HeadPhonesTwu from "../../assets/headphonesTwu.png";
import HeadPhonesThree from "../../assets/headphonesThree.png";
import HeadPhonesFour from "../../assets/headphonesFour.png";

const Listas = ({form, setForm, content, setContent}) => {
    const [ imageOne, setImageOne ] = useState(HeadPhones);
    const [ imageTwu, setImageTwu ] = useState(HeadPhonesTwu);
    const [ imageThree, setImageThree ] = useState(HeadPhonesThree);
    const [ imageFour, setImageFour ] = useState(HeadPhonesFour);
    const [ valueImg, setValueImg ] = useState(imageOne);
    const [ numberProduct, setNumberProduct ] = useState('01');
    
    const productInformation = {
        productOne: {
            inf: 'Headset Supreme Pro',
            price: '$245,00',
            aboutProduct: 'O Headset Supreme Pro oferece uma experiência de áudio premium, projetado para verdadeiros entusiastas de games. Com qualidade sonora superior, conforto excepcional e design elegante, este headset proporciona uma imersão total em seus jogos favoritos.'
        },
        productTwo: {
            inf: 'Epic SonicX Headset',
            price: '$280,00',
            aboutProduct: 'Apresentando o Epic SonicX Headset, uma escolha acessível para jogadores que buscam qualidade excepcional. Este headset oferece áudio envolvente e conforto duradouro, garantindo uma experiência agradável durante longas sessões de jogo.'
        },
        productThree: {
            inf: 'Ultimate Surround Sound Headset',
            price: '$260,00',
            aboutProduct: 'O Ultimate Surround Sound Headset redefine a experiência sonora nos jogos. Desfrute de um áudio surround imersivo que coloca você no centro da ação. Com uma construção robusta e almofadas auriculares luxuosas.'
        },
        productFour: {
            inf: 'StealthMaster Gaming Headset',
            price: '$240,00',
            aboutProduct: 'O StealthMaster Gaming Headset é projetado para jogadores que buscam desempenho superior a um preço acessível. Com drivers potentes e cancelamento de ruído avançado, você pode se concentrar totalmente no jogo.'
        }
    };
    
    
    const [ priceValue, setPriceValue ] = useState(productInformation.productOne.price);
    const [ infValue, setInfValue ] = useState(productInformation.productOne.inf);
    const [ aboutFeaturedProduct, setAboutFeaturedProduct ] = useState(productInformation.productOne.aboutProduct);
    
    return(
        <section className="flex justify-between items-center w-full h-screen">

            < Select 
            imgOne={imageOne}
            imgTwu={imageTwu}
            imgThree={imageThree}
            imgFour={imageFour}
            selectImg={setValueImg}
            selectNumber={setNumberProduct}
            selectPrice={setPriceValue}
            selectInf={setInfValue}
            information={productInformation}
            setAbout={setAboutFeaturedProduct}
            />            
            < Article             
            imgOne={imageOne}
            imgTwu={imageTwu}
            imgThree={imageThree}
            newImg={valueImg}
            numberValue={numberProduct}
            price={priceValue}
            inf={infValue}
            about={aboutFeaturedProduct}
            form={form}
            setForm={setForm}
            content={content}
            />
            < Social />
        </section>
    )
}

export default Listas;