import React from "react";
import '../../globals.css'
import dados from '../../dados.json'
import ReceipCardView from "../../components/ReceipCard";

const Receip = () => {

    return (
        <>
            <div className="flex flex-col w-full bg-blue-200 items-center justify-center">
                <div className="flex-col w-8/12 pt-20 gap-20 pb-20 flex">
                    {
                        dados.receitas.map((item) => (<ReceipCardView id={item.id} imagem={item.imagem} nome={item.nome} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Receip;
