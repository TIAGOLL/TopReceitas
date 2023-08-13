import React from 'react';
//import dados from './dados.json'

const Adicionar = () => {
    let obj = {nome: "",ingredientes: [""],modopreparo: [""]}

    async function add(){
        obj.nome = document.getElementById("nome").value;
        obj.ingredientes = document.getElementById("ingredientes").value;
        obj.modopreparo = document.getElementById("modopreparo").value;
        //dados.services.append(obj);
        
    }
    return (
        <>
            <div>
                <input type='text' id='nome' placeholder='nome' defaultValue={""}></input>
                <input type='text' id='ingredientes' placeholder='ingredientes' defaultValue={""}></input>
                <input type='text' id='modopreparo' placeholder='modopreparo' defaultValue={""}></input>
                <button onClick={add}>Adicionar</button>
            </div>
        </>
    );
}

export default Adicionar;
