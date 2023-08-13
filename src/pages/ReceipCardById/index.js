import dados from '../../dados.json'
import React from 'react';
import { useParams } from 'react-router-dom';

function ReceipCardById() {

    const params = useParams()

    return (
        <div className="flex bg-blue-200">
            <div className="flex w-full items-center justify-center gap-6 p-6">
                <div className="flex flex-col w-10/12 h-auto bg-blue-200">
                    <div className="flex flex-col items-center justify-center font-semibold text-lg gap-20">
                        {
                            dados.map((item) => {
                                if (params.id === item.id) {
                                    return (
                                        <div className="flex w-full h-full items-center justify-center">
                                            <div className="flex items-center w-3/12 h-full justify-start">
                                                <div className="flex flex-row h-full w-1/12 items-start justify-start text-2xl">
                                                    {item.id}
                                                </div>
                                                <div>
                                                    <img className="rounded-2xl" src={item.imagem} width={300} height={300} alt="Imagem da comida" />
                                                </div>
                                            </div>
                                            <div className="flex flex-row pl-10 w-2/12 items-center justify-start gap-3 font-semibold text-lg">
                                                {item.nome}
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
