import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.js';
import Adicionar from './pages/adicionar';
import Header from './components/Header/index';
import Footer from './components/Footer';
import ReceipCardById from './pages/ReceipCardById';
import Receip from './pages/Receip';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/adicionar"} element={<Adicionar />} />
                <Route path={"/receita/:id"} element={<ReceipCardById />} />
                <Route path={"/receita"} element={<Receip />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
