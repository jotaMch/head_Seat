import React from "react";

const Select = ({imgOne, imgTwu, imgThree, imgFour, selectImg, selectNumber, selectPrice, selectInf, information, setAbout}) => {

    const selectProduct = (img, number, productInfo) => {
        console.log('img:', img);
        console.log('number:', number);
        console.log('productInfo:', productInfo);
    
        if (productInfo && productInfo.price) {
            selectImg(img);
            selectNumber(number);
            selectPrice(productInfo.price);
            selectInf(productInfo.inf);
        } else {
            console.error('Informações do produto ausentes ou inválidas');
        }
    };
    

    const handleChange = (selectedProduct) => {
        switch (selectedProduct) {
            case 'opcao1':
                selectProduct(imgOne, '01', information.productOne);
                setAbout(information.productOne.aboutProduct);
                break;
            case 'opcao2':
                selectProduct(imgTwu, '02', information.productTwo);
                setAbout(information.productTwo.aboutProduct);
                break;                
            case 'opcao3':
                selectProduct(imgThree, '03', information.productThree);
                setAbout(information.productThree.aboutProduct);
                break;
            case 'opcao4':
                selectProduct(imgFour, '04', information.productFour);
                setAbout(information.productFour.aboutProduct);
                break;
            default:
                break;
        }
    };

    function func(){}
    return(
        <form className="w-1/12 h-1/6 flex flex-col justify-around items-center">
            <label>
                <input onChange={(e) => handleChange(e.target.value)} 
                className="w-3 h-3 custom-radio flex justify-center items-center cursor-pointer" 
                type="radio" name="opcao" value="opcao1"/> 
            </label>

            <label>
                <input onChange={(e) => handleChange(e.target.value)} 
                className="w-3 h-3 custom-radio flex justify-center items-center cursor-pointer " 
                type="radio" name="opcao" value="opcao2"/> 
            </label>

            <label>
                <input onChange={(e) => handleChange(e.target.value)} 
                className="w-3 h-3 custom-radio flex justify-center items-center cursor-pointer" 
                type="radio" name="opcao" value="opcao3"/> 
            </label>

            <label>
                <input onChange={(e) => handleChange(e.target.value)} 
                className="w-3 h-3 custom-radio flex justify-center items-center cursor-pointer" 
                type="radio" name="opcao" value="opcao4"/> 
            </label>
        </form>
    )
}

export default Select;
