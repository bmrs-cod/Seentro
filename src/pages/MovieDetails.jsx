import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ListContext } from "../context/ListContext";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const { addToList, removeFromList, isInList } = useContext(ListContext);

    useEffect(() => {
        const buscarFilme = async () => {
            setCarregando(true);
            const resposta = await fetch(
                "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_KEY + "&language=pt-BR"
            );
            const dados = await resposta.json();
            setFilme(dados);
            setCarregando(false);
        };

        buscarFilme();
    }, [id]);

    const handleToggleSave = () => {
        if (isInList(filme.id)) {
            removeFromList(filme.id);
        } else {
            addToList(filme);
        }
    };

    if (carregando) {
        return <p>Carregando...</p>;
    }

    const poster = filme.poster_path
        ? "https://image.tmdb.org/t/p/w400" + filme.poster_path
        : null;

    return (
        <div className="movie-details">
            {poster && <img src={poster} alt={filme.title} />}
            <h1>{filme.title}</h1>
            <p>Nota: {filme.vote_average}</p>
            <p>Lançamento: {filme.release_date}</p>
            <p>{filme.overview}</p>
            <button onClick={handleToggleSave}>
                {isInList(filme.id) ? "Remover da lista" : "Adicionar à lista"}
            </button>
        </div>
    );
};

export default MovieDetails;