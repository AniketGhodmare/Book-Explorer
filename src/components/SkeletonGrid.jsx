const SkeletonGrid = () => {
    let dummyArray = Array.from({ length: 10 }, (_, index) => index);
    return (
        <div className="flex gap-4 flex-wrap justify-center my-10 ">   
            {dummyArray.map((index) =>
                <div key={index}
                    className='flex-1 min-w-36 md:min-w-52 bg-gray-300 rounded-md h-96 animate-pulse'
                />)
            }
        </div>
    )
}

export default SkeletonGrid
