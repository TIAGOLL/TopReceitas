import React from 'react';
import dados from '../../dados.json';
import { useState } from 'react';

const Adicionar = () => {


    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')
    const [newsLetter, setNewsLetter] = useState(false)



    const addReceip = async e => {
        e.preventDefault()

        const ingredienteSeparado = ingredientes.split(',')
        const modoPreparoSeparado = modoPreparo.split(',')

        let obj = { 'nome': nome, 'ingredientes': ingredienteSeparado, 'modopreparo': modoPreparoSeparado }
        const id = dados.receitas.map((item) => {

            const cont = item.lenght + 1 

            return cont
        })
        console.log(id)
        const receita = {
            id: "7",
            nome: obj.nome,
            ingredientes: obj.ingredientes,
            modopreparo: obj.modopreparo,
            imagem: ""
        }

        console.log(receita)

    }
    return (
        <>
            <div className='flex w-full items-center justify-center '>
                <form onSubmit={addReceip} className="w-8/12 flex flex-col justify-center my-10">
                    <div className="flex items-center mb-6">
                        <div className="w-2/12">
                            <label className="block text-gray-700 font-bold text-center mb-1 pr-4" for="inline-full-name">
                                Nome da receita
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input onChange={e => setNome(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder='Arroz' />
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-2/12">
                            <label className="block text-gray-700 font-bold text-center mb-1 pr-4" for="ingredientes">
                                Ingredientes
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input onChange={e => setIngredientes(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="ingredientes" type="text" placeholder="1 - cebola, 2 - arroz, 3 - óleo..." />
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-2/12">
                            <label className="block text-gray-700 font-bold text-center mb-1 pr-4" for="modopreparo">
                                Modo de Preparo
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input onChange={e => setModoPreparo(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="modopreparo" type="text" placeholder="Primeiro pegue a cebola, pique em pedacinhos..." />
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="w-2/12"></div>
                        <label className="w-2/3 block text-gray-700 font-bold">
                            <input onChange={(e) => setNewsLetter(prev => !prev)} className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Quero me inscrever na NewsLetter!
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2/12"></div>
                        <div className="w-2/3">
                            <button className="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Adicionar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Adicionar;
