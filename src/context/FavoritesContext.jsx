import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (book) => {
        if (!favorites.find((b) => b.id === book.id)) {
            setFavorites((prev) => [...prev, book]);
        }
    };

    const removeFavorite = (id) =>
        setFavorites((prev) => prev.filter((b) => b.id !== id));

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// export const useFavorites = () => useContext(FavoritesContext);
