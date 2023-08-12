import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.js';
import Adicionar from './pages/adicionar';
import Detalhes from './pages/detalhes';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Footer from './components/Footer/index';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Header />
                <Route path={"/"} element={<App />} />
                <Route path={"/adicionar"} element={<Adicionar />} />
                <Route path={"/detalhes"} element={<Detalhes />} />
                <Footer />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
