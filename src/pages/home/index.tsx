import React from 'react';
import { Link } from "react-router-dom";
import '../../globals.css'

const home = () => {
    return (
        <>
           <div className="flex flex-row h-full w-screen bg-blue-500">
                <nav className='flex flex-col '>
                    <ul>
                        <li className="">
                            <Link to="/" className="p-6">Home</Link>
                            <Link to="/adicionar" className="p-6">Adicionar</Link>
                            <Link to="/detalhes" className="p-6">Detalhes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default home;