import { useState } from "react";
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";
import hero_bg from "../assets/hero_bg.jpg";
import SkeletonGrid from "../components/SkeletonGrid";

const SearchPage = () => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSearch = (query) => {
        if (!query) return;
        setLoading(true);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`)
            .then((res) => res.json())
            .then((data) => setBooks(data.items || []))
            .catch(() => setBooks([]))
            .finally(() => setLoading(false));
    }

    return (
        <div className="relative py-3 md:py-7 my-3 max-w-6xl mx-auto px-2">
            <div className="flex justify-center flex-col gap-6 items-center ">
                <h1 className="text-2xl md:text-4xl font-bold text-purple-800 text-center">
                    Find Best Books for You
                </h1>
                <SearchForm onSearch={onSearch} />
            </div>
            {loading ? <SkeletonGrid /> : books && <BookList books={books} />}
            {/* {loading ? <p>Loading...</p> : books && <BookList books={books} />} */}
        </div>
    );
}

export default SearchPage
