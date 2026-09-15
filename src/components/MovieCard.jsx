import { Link } from "react-router";
import { FaPlus, FaCheck } from "react-icons/fa";

const MovieCard = ({ movie, isSaved, onToggleSave }) => {
    const poster = movie.poster_path
        ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
        : null;

    return (
        <div className="movie-card">
            <Link to={"/filme/" + movie.id}>
                {poster && <img src={poster} alt={movie.title} />}
                <h3>{movie.title}</h3>
            </Link>
            <p>Nota: {movie.vote_average}</p>
            <button onClick={() => onToggleSave(movie)}>
                {isSaved ? <FaCheck /> : <FaPlus />}
                {isSaved ? "Na lista" : "Adicionar"}
            </button>
        </div>
    );
};

export default MovieCard;