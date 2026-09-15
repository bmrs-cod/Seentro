import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";
import { ListContext } from "../context/ListContext";

const MyList = () => {
    const { list, removeFromList } = useContext(ListContext);

    if (list.length === 0) {
        return <EmptyState mensagem="Você ainda não adicionou nenhum filme." />;
    }

    const handleToggleSave = (movie) => {
        removeFromList(movie.id);
    };

    return (
        <div className="my-list">
            <h1>Minha Lista</h1>
            <div className="movie-grid">
                {list.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isSaved={true}
                        onToggleSave={handleToggleSave}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyList;