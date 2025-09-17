import { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import BookDetailsSkeleton from '../components/BookDetailsSkeleton';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data));
    }, [id]);

    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

    if (!book) return <BookDetailsSkeleton />;

    const { volumeInfo } = book;
    const isFavorite = favorites.some((b) => b.id === id);
    return (
        <section className='max-w-5xl m-auto my-10'>
            <div className="flex gap-4 flex-wrap">
                <div className=" flex-[2] bg-gray-300 rounded-lg overflow-hidden  min-w-2xs ">
                    <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title}
                        className='w-full h-auto object-cover min-h-64 '
                    />
                </div>
                <div className=" flex-[4] flex flex-col gap-4">
                    <h1 className='text-3xl font-bold'>{volumeInfo.title}</h1>
                    <div className="">
                        <p className='capitalize font-semibold text-base md:text-lg' >Authors : {volumeInfo.authors?.join(", ")}</p>
                        <p className='capitalize font-semibold text-base md:text-lg'>Published by : {volumeInfo.publisher}, {volumeInfo.publishedDate}. </p>
                        <p className='text-base md:text-lg font-semibold text-purple-800'>Total Pages : {volumeInfo?.pageCount}</p>
                    </div>

                    {isFavorite ? (
                        <FavBtn onClick={() => removeFavorite(id)}><FaHeart className="text-lg" />Remove from Favorites</FavBtn>
                    ) : (
                        <FavBtn onClick={() => addFavorite(book)}><FaRegHeart className="text-lg" />Add to Favorites</FavBtn>
                    )}
                </div>
            </div>
            <p className='my-5 font-medium'>{volumeInfo.description}</p>
        </section>
    );
}

const FavBtn = ({ onClick, children }) => {
    return (
        <button onClick={onClick} type="button" className='flex w-fit items-center gap-2 px-4 py-1 text-white font-semibold bg-purple-800 text-lg rounded-lg cursor-pointer'>
            {children}
        </button>
    )
}
export default BookDetails
