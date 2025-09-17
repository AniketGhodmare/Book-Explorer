const Savebutton = ({ onClick, children }) => {
    return (
        <button type="button" className="p-1.5  text-sm rounded-full bg-white/70 absolute top-4 right-4 cursor-pointer border border-gray-300 flex items-center gap-1"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Savebutton
