import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { FavoritesContext } from "../context/FavoritesContext";

const BookCard = ({ book }) => {
    const { id, volumeInfo } = book;
    const { title, authors, imageLinks } = volumeInfo;
    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

    const isFavorite = favorites.some((b) => b.id === id);

    return (
        <div className="book-card border p-3 rounded-md shadow-md hover:shadow-xl min-w-36 md:min-w-52  flex-1 relative max-w-52">
            <Link to={`/book/${id}`} className="flex flex-col gap-2 h-full relative">
                <img src={imageLinks?.thumbnail} alt={title} className="w-full bg-gray-300 rounded-md overflow-hidden object-cover h-52 md:h-64 " />
                <div className=" flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{title.slice(0, 30)}</h3>
                    <p>Authors : {authors?.join(", ")}</p>
                </div>
            </Link>

            {isFavorite ? (
                <Savebutton onClick={() => removeFavorite(id)}><FaHeart className="text-red-500 text-base" /></Savebutton>
            ) : (
                <Savebutton onClick={() => addFavorite(book)}><FaRegHeart className="text-base" /></Savebutton>
            )}
        </div>
    );
}
const Savebutton = ({ onClick, children }) => {
    return (
        <button type="button" className="p-1.5  text-sm rounded-full bg-white/70 absolute top-4 right-4 cursor-pointer border border-gray-300 flex items-center gap-1"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default BookCard
