import { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";
import { ListContext } from "../context/ListContext";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Home = () => {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [resultadosBusca, setResultadosBusca] = useState([]);
    const [buscou, setBuscou] = useState(false);
    const [carregando, setCarregando] = useState(false);

    const { addToList, removeFromList, isInList } = useContext(ListContext);

    useEffect(() => {
        const buscarPopulares = async () => {
            setCarregando(true);
            const resposta = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=pt-BR"
            );
            const dados = await resposta.json();
            setFilmesPopulares(dados.results);
            setCarregando(false);
        };

        buscarPopulares();
    }, []);

    const buscarFilmes = async (termo) => {
        setBuscou(true);
        setCarregando(true);
        const resposta = await fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=pt-BR&query=" + termo
        );
        const dados = await resposta.json();
        setResultadosBusca(dados.results);
        setCarregando(false);
    };

    const handleToggleSave = (movie) => {
        if (isInList(movie.id)) {
            removeFromList(movie.id);
        } else {
            addToList(movie);
        }
    };

    const listaExibida = buscou ? resultadosBusca : filmesPopulares;

    return (
        <div className="home">
            <SearchBar onSearch={buscarFilmes} />

            {carregando && <p>Carregando...</p>}

            {!carregando && listaExibida.length === 0 && (
                <EmptyState mensagem="Nenhum filme encontrado." />
            )}

            <div className="movie-grid">
                {listaExibida.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isSaved={isInList(movie.id)}
                        onToggleSave={handleToggleSave}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;