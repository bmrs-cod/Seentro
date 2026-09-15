import { Link } from "react-router";
import { FaFilm, FaListUl } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <FaFilm />
                Seentro
            </Link>
            <nav>
                <Link to="/">Buscar</Link>
                <Link to="/minha-lista">
                    <FaListUl />
                    Minha Lista
                </Link>
            </nav>
        </header>
    );
};

export default Header;