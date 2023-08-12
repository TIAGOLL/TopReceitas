import React from 'react';
import { Link } from "react-router-dom";
import './globals.css'

const App = () => {
    return (
        <>
            <div className="flex flex-row w-screen bg-blue-500">
                <nav className='flex flex-row'>
                    <ul className='flex flex-row gap-6 m-10'>
                        <li className="p-6">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-6">
                            <Link to="/detalhes">Detalhes</Link>
                        </li>
                        <li className="p-6">
                            <Link to="/adicionar">Adicionar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>

    )
}

export default App;
