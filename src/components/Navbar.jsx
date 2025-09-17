import logo from '../assets/logo.png'
import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <nav className="shadow-lg  px-2 py-6  md:px-6 sticky top-0 z-10 bg-white">
            <div className="flex justify-between items-center container mx-auto" >
                <NavLink to="/" className=" font-bold md:text-xl flex items-center gap-2">
                    <img src={logo} alt="logo" className='w-7 md:w-10 h-auto object-cover' />
                    Book Explorer
                </NavLink>
                <div className="space-x-4">
                    <ActiveLink to="/" >Search</ActiveLink>
                    <ActiveLink to="/favorites" >My Favorites</ActiveLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) => `text-md hover:underline text-gray-800  font-bold underline-offset-8  ${isActive ? " underline text-black " : ""}`}
        >
            {children}
        </NavLink>
    )
}
