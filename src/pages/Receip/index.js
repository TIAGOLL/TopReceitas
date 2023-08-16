import React from "react";
import '../../globals.css'
import ReceipCardView from "../../components/ReceipCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Receip = () => {

    const [data, setData] = useState([])

    const url = 'http://localhost:3000/receitas'

    async function carregaDados() {
        await axios.get(url)
            .then((res) => setData(res.data))
    }

    useEffect(() => {
        carregaDados()
    }, []);


    return (
        <>
            <div className="flex flex-col w-full bg-blue-200 items-center justify-center">
                <div className="flex-col w-8/12 pt-20 gap-20 pb-20 flex">
                    {
                        data.map((item) => (<ReceipCardView id={item.id} imagem={item.imagem} nome={item.nome} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Receip;
