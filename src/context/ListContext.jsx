import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const addToList = (movie) => {
        setList([...list, movie]);
    };

    const removeFromList = (id) => {
        const novaLista = list.filter((movie) => movie.id !== id);
        setList(novaLista);
    };

    const isInList = (id) => {
        const encontrado = list.find((movie) => movie.id === id);
        return encontrado !== undefined;
    };

    return (
        <ListContext.Provider value={{ list, addToList, removeFromList, isInList }}>
            {children}
        </ListContext.Provider>
    );
};