import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">

                {/* Hamburger Menu Button (Only on Mobile) */}
                <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className="hidden md:flex space-x-6 items-center text-lg font-semibold">
                    <li>
                        <Link to="/ps1" className="hover:text-gray-400 text-4xl">PS1</Link>
                    </li>
                    <li>
                        <Link to="/ps2" className="hover:text-gray-400 text-4xl">PS2</Link>
                    </li>
                    <li>
                        <Link to="/ps3" className="hover:text-gray-400 text-4xl">PS3</Link>
                    </li>
                    <li>
                        <Link to="/psp" className="hover:text-gray-400 text-4xl">PSP</Link>
                    </li>

                    {/* Logo in Center */}
                    <li>
                        <Link to="/"><img src="/psretro/psretrologo-full.webp" alt="PS Retro Full Logo" className="h-auto w-28 mx-4"></img></Link>
                    </li>

                    <li>
                        <Link to="/ps-vita" className="hover:text-gray-400 text-4xl">PS Vita</Link>
                    </li>
                    <li>
                        <Link to="/ps4" className="hover:text-gray-400 text-4xl">PS4</Link>
                    </li>
                    <li>
                        <Link to="/ps-vr" className="hover:text-gray-400 text-4xl">PS VR</Link>
                    </li>
                    <li>
                        <Link to="/ps5" className="hover:text-gray-400 text-4xl">PS5</Link>
                    </li>
                </ul>

                {/* Mobile Menu - Shows when menuOpen is true */}
                <ul className={`absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 text-3xl font-semibold transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
                    <li><Link to="/ps1" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS1</Link></li>
                    <li><Link to="/ps2" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS2</Link></li>
                    <li><Link to="/ps3" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS3</Link></li>
                    <li><Link to="/psp" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PSP</Link></li>
                    <li><Link to="/ps-vita" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS Vita</Link></li>
                    <li><Link to="/ps4" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS4</Link></li>
                    <li><Link to="/ps-vr" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS VR</Link></li>
                    <li><Link to="/ps5" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>PS5</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;