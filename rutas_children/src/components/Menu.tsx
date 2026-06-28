import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav>
            <Link to="/">Inicio</Link> |
            <Link to="/acerca">Acerca</Link> |
            <Link to="/contacto">Contacto</Link> |
            <Link to="/tarjetas">Tarjetas</Link> |
            <Link to="/productos">Productos</Link> |
            <Link to="/peliculas">Películas</Link> |
        </nav>
    );
}

export default Menu;