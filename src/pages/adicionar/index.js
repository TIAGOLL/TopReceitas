import React from 'react';
import dados from '../../dados.json'


const Adicionar = () => {
    let obj = { 'nome': "", 'ingredientes': [""], 'modopreparo': [""] }

    const add = async e =>{
        obj.nome = document.getElementById("nome").value;
        obj.ingredientes = document.getElementById("ingredientes").value;
        obj.modopreparo = document.getElementById("modopreparo").value;
        const receita = {
            id: "1",
            nome: obj.nome,
            ingredientes: [obj.ingredientes],
            modopreparo: [obj.modopreparo],
            imagem: ""
        }
        dados = dados.receitas.concat(receita);
        dados = JSON.stringify(dados);

    }
    return (
        <>
            <form onSubmit={add}>
                <input type='text' id='nome' placeholder='nome' defaultValue={""}></input>
                <input type='text' id='ingredientes' placeholder='ingredientes' defaultValue={""}></input>
                <input type='text' id='modopreparo' placeholder='modopreparo' defaultValue={""}></input>
                <button type='submit'>Adicionar</button>
            </form>
        </>
    );
}

export default Adicionar;
