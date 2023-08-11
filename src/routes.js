import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'
import App from './App.js';
import Adicionar from './pages/adicionar/index.tsx';
import Detalhes from './pages/detalhes/index.tsx';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/adicionar"} element={<Adicionar />} />
                <Route path={"/detalhes"} element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
