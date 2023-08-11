import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/index.tsx';
import Add from './pages/adicionar/index.tsx';
import Detalhes from './pages/detalhes/index.tsx';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/adicionar"} element={<Add />} />
                <Route path={"/detalhes"} element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
