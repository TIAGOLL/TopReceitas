import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ReceipCardById() {

    const params = useParams()


    const [data, setData] = useState([])
    const url = 'http://localhost:3000/receitas'

    async function carregaDados() {
        await axios.get(url)
            .then((res) => setData(res.data), console.log(data))
    }
    
    useEffect(() => {
        carregaDados()
    }, []);


    return (
        <div className="flex bg-blue-200">
            <div className="flex w-full items-center justify-center gap-6 p-6">
                <div className="flex flex-col w-10/12 h-auto bg-blue-200">
                    <div className="flex flex-col items-center justify-center font-semibold text-lg gap-20">
                        {
                            data.map((item) => {
                                if (params.id === item.id) {
                                    return (
                                        <div className="flex w-full h-full flex-col gap-6 items-center justify-center">
                                            <div className="flex items-center w-3/12 h-full justify-center">
                                                <div className="flex flex-row h-full items-start justify-start text-2xl">
                                                    {item.id}
                                                </div>
                                                <div className="flex flex-row pl-10 items-center justify-start gap-3 font-semibold text-2xl">
                                                    {item.nome}
                                                </div>
                                            </div>

                                            <div>
                                                <img className="rounded-2xl" src={item.imagem} width={300} height={300} alt="Imagem da comida" />
                                            </div>
                                            <div className='flex flex-col '>
                                                <ul>
                                                    {item.ingredientes.map((item1) => (
                                                        <li className='flex pb-4' >{item1}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <ul>
                                                    {item.modopreparo.map((item1) => (
                                                        <li>
                                                            {item1}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReceipCardById;
