import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.js';
import Adicionar from './pages/adicionar';
import Detalhes from './pages/detalhes';
import Header from './components/Header/index';
import Footer from './components/Footer';


function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/adicionar"} element={<Adicionar />} />
                <Route path={"/detalhes"} element={<Detalhes />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;
