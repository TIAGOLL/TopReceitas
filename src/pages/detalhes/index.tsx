import React from 'react';
import { Link } from "react-router-dom";
import '../../globals.css'

const detalhes = () => {
    return (
        <>
            <body className="h-screen w-screen">
                <header className="flex flex-row h-96 w-screen bg-blue-500">
                    <nav className='flex flex-col'>
                        <ul>
                            <li className="">
                                <Link to="/" className="p-6">Home</Link>
                                <Link to="/adicionar" className="p-6">Adicionar</Link>
                                <Link to="/detalhes" className="p-6">Detalhes</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </body>
        </>
    )
}

export default detalhes;