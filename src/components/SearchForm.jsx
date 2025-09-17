import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = ({ onSearch }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !author && !genre) {
            setError("Please enter at least one search field.");
            return;
        }
        setError("");
        let query = "";
        if (title) query += `intitle:${title}+`;
        if (author) query += `inauthor:${author}+`;
        if (genre) query += `subject:${genre}+`;
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="px-5 py-3.5 md:py-2 border-2 rounded-3xl md:rounded-full flex max-md:flex-col max-md:gap-2 w-full md:items-center max-w-2xl">
            <input
                placeholder="Title" className="flex-1 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input placeholder="Author" className="flex-1 outline-none"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input placeholder="Genre" className="flex-1 outline-none"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <button type="submit" className="p-2 bg-purple-800 text-white rounded-full max-md:block text-center">
                <FiSearch className="text-xl font-bold mx-auto" />
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default SearchForm
