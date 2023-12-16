import React, { useState, useEffect } from "react";

const BuyProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        payment: "padrao", 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const SendDoc = async () => {
        try {
            const response = await fetch("http://localhost:3000/doc", {
                method: "POST", 
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                console.log("Dados enviados com sucesso!");
                // Faça o que for necessário após o envio bem-sucedido
            } else {
                console.error("Falha ao enviar dados");
            }

            } catch (error) {
            console.error("Erro ao enviar dados", error);
            }
        };

return(       
<div className="w-10/12 mx-auto"  >
    <h2 className="text-white text-center
    w-full text-[30px] my-10">To purchase</h2>
    <form onSubmit={(e) => {
            e.preventDefault();
            SendDoc();
        }} 
    method="POST" 
    className="flex flex-col mx-auto
    justify-center items-center w-11/12" >
        <div className="w-full mb-10">
            <input type="text"
            name="name"
            className="w-full h-10 bg-transparent rounded-3xl
            border border-sky-500 text-white px-4"
            placeholder="your name complete"             
            onChange={handleChange}/>
        </div>
        <div className="w-full mb-10">
            <input type="email"
            name="email"
            className="w-full h-10 bg-transparent rounded-3xl
            border border-sky-500 text-white
            px-4"
            placeholder="your email" 
            onChange={handleChange}/>
        </div>
        <div className="w-full mb-10">
            <input type="text"
            name="address"
            className="w-full h-10 bg-transparent rounded-3xl
            border border-sky-500 text-white
            px-4"
            placeholder="your current address"
            onChange={handleChange} />
        </div>
        <div className="w-full mb-10">
            <select className="w-full h-10 text-neutral-400 rounded-3xl bg-transparent border border-sky-500 text-white px-4"
            name="payment" onChange={handleChange}>
                <option value="padrao" className="text-white bg-[#080808]">
                    Select
                </option>
                <option value="credit-card" className="text-white bg-[#080808]">
                    Credit card
                </option>
                <option value="debit-card" className="text-white bg-[#080808]">
                    Debit Card
                </option>
                <option value="pix" className="text-white bg-[#080808]">
                    Pix
                </option>
                <option value="ticket" className="text-white bg-[#080808]">
                    Ticket
                </option>
            </select>
        </div>
        <button type="submit" className="border border-sky-500 rounded-3xl w-full h-14 mt-10 hover:text-sky-500 bg-sky-500 text-white hover:bg-transparent">
            Concluded
        </button>                            
    </form>
</div>
    )
}


export default BuyProduct;