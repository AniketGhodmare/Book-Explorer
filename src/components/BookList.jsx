import BookCard from "./BookCard";

const BookList = ({ books }) => {
    if (!books.length) return <p>No results found.</p>;
    return (
        <div className="flex gap-4 flex-wrap justify-center my-10 ">
            {books.map((book) =>
                <BookCard
                    key={book.id}
                    book={book}
                    id={book.id}
                    title={book?.volumeInfo?.title}
                    authors={book?.volumeInfo?.authors}
                    imageLinks={book?.volumeInfo?.imageLinks}
                />
            )}
        </div>
    );
}

export default BookList
