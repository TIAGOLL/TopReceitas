import React from 'react';
import { Link } from "react-router-dom";

const Detalhes = () => {
    return (
        <>

            <header className="flex flex-row p-8 w-screen bg-blue-500">
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

        </>
    )
}

export default Detalhes;
