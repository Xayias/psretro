import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white py-4 w-full z-50">
            <div className="container mx-auto flex justify-center items-center px-4">

                {/* Hamburger Menu Button (Only on Mobile) */}
                <button className="md:hidden text-white text-3xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </button>

                {/* Logo in Center (on Mobile) */}
                <div className="flex md:hidden flex-grow justify-between">
                    <Link to="/">
                        <img src="/psretro/psretrologo-full.webp" alt="PS Retro Full Logo" className="h-auto w-12" />
                    </Link>
                    {/* Hamburger Menu Button (Only on Mobile) */}
                    <button className="md:hidden text-white text-3xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars />
                    </button>
                </div>

                <ul className="hidden md:flex space-x-6 items-center text-lg font-semibold">
                    <li>
                        <Link to="/ps1" className="hover:text-gray-400 text-3xl">PS1</Link>
                    </li>
                    <li>
                        <Link to="/ps2" className="hover:text-gray-400 text-3xl">PS2</Link>
                    </li>
                    <li>
                        <Link to="/ps3" className="hover:text-gray-400 text-3xl">PS3</Link>
                    </li>
                    <li>
                        <Link to="/psp" className="hover:text-gray-400 text-3xl">PSP</Link>
                    </li>
                    {/* Logo in Center (on Desktop) */}
                    <div className="hidden md:flex flex-grow justify-center">
                      <Link to="/">
                        <img src="/psretro/psretrologo-full.webp" alt="PS Retro Full Logo" className="h-auto w-24 px-4" />
                      </Link>
                    </div>
                    <li>
                        <Link to="/ps-vita" className="hover:text-gray-400 text-3xl">PS Vita</Link>
                    </li>
                    <li>
                        <Link to="/ps4" className="hover:text-gray-400 text-3xl">PS4</Link>
                    </li>
                    <li>
                        <Link to="/ps-vr" className="hover:text-gray-400 text-3xl">PS VR</Link>
                    </li>
                    <li>
                        <Link to="/ps5" className="hover:text-gray-400 text-3xl">PS5</Link>
                    </li>
                </ul>

                {/* Mobile Fullscreen Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    {/* Mobile Menu Links */}
                    <ul className="flex flex-col items-center gap-8 text-3xl font-semibold">
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
            </div>
        </nav>
    );
};

export default Navbar;