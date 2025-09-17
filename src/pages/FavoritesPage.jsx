import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookList from "../components/BookList";


const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext);
    return (
        <div className="py-3 md:py-7 my-3 max-w-6xl mx-auto px-2">
            <h1 className="text-2xl md:text-4xl font-bold text-purple-800 text-center">
                My Favorites Books.
            </h1>
            <BookList books={favorites} />
        </div>
    );
}

export default FavoritesPage
