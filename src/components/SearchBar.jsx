import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const [termo, setTermo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(termo);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <FaSearch />
            <input
                type="text"
                placeholder="Buscar filme..."
                value={termo}
                onChange={(event) => setTermo(event.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;