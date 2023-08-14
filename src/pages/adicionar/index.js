import React from 'react';
import dados from '../../dados.json';
import { useState } from 'react';

const Adicionar = () => {
    let obj = { 'nome': "", 'ingredientes': [""], 'modopreparo': [""] }


    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')


    const add = async e => {
        e.preventDefault()

        const receita = {
            id: "1",
            nome: obj.nome,
            ingredientes: [obj.ingredientes],
            modopreparo: [obj.modopreparo],
            imagem: ""
        }



    }
    return (
        <>
            <div style={{width:"100%",height:"400px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <form onSubmit={add} style={{backgroundColor:"#aaa",borderRadius:"5px",padding:"5px"}}>
                <label>nome</label><br/>
                <input onChange={(e) => setNome(e.target.value)} type='text' id='nome' placeholder='nome' defaultValue={""} />
                <br/><label>ingredientes</label><br/>
                <input onChange={(e) => setIngredientes(e.target.value)} type='text' id='ingredientes' placeholder='ingredientes' defaultValue={""} />
                <br/><label>Modo de preparo</label><br/>
                <input onChange={(e) => setModoPreparo(e.target.value)} type='text' id='modopreparo' placeholder='modo de preparo' defaultValue={""} />
                <br/><button type='submit' style={{border:"#60a5fa solid",padding:"5px 10px",borderRadius:"15px",margin:"10px"}}>Adicionar</button>
            </form>
            </div>
        </>
    );
}

export default Adicionar;
