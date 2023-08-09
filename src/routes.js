import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index.tsx'
import Erro from './pages/Erro/index.tsx'
import Header from './components/Header/index.tsx'
import ReceipView from './ReceipView/index.js';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/receita" element={<ReceipView />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
