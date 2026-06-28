import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from "./pages/Inicio.tsx";
import Acerca from "./pages/Acerca.tsx";
import Contacto from "./pages/Contacto.tsx";
import Menu from "./components/Menu.tsx";
import PaginaTarjetas from "./pages/PaginaTarjetas.tsx";
import PaginaProductos from "./pages/PaginaProductos.tsx";
import PaginaPeliculas from "./pages/PaginaPeliculas.tsx";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/acerca" element={<Acerca/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/tarjetas" element={<PaginaTarjetas/>}/>
                <Route path="/productos" element={<PaginaProductos/>}/>
                <Route path="/peliculas" element={<PaginaPeliculas/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;