const BookDetailsSkeleton = () => {
    return (
        <section className='max-w-5xl m-auto my-10 animate-pulse'>
            <div className="flex gap-4 flex-wrap flex-col md:flex-row">
                <GrayBox className="flex-[2]"/>
                <GrayBox className="flex-[4]"/>
            </div>
        </section>
    )
}
const GrayBox = ({ className = '' }) => {
    return (
        <div className={`rounded-lg bg-gray-300 min-h-64 min-w-2xs ${className}`} />
    )
}
export default BookDetailsSkeleton
