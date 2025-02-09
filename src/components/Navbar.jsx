import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex space-x-6 items-center text-lg font-semibold">
                    <li>
                        <Link to="/ps1" className="hover:text-gray-400">PS1</Link>
                    </li>
                    <li>
                        <Link to="/ps2" className="hover:text-gray-400">PS2</Link>
                    </li>
                    <li>
                        <Link to="/ps3" className="hover:text-gray-400">PS3</Link>
                    </li>

                    {/* Logo in Center */}
                    <li>
                        <img src="/psretrologo-full.webp" alt="PS Retro Full Logo" className="h-10 w-10 mx-4"></img>
                    </li>

                    <li>
                        <Link to="/ps4" className="hover:text-gray-400">PS4</Link>
                    </li>
                    <li>
                        <Link to="/ps5" className="hover:text-gray-400">PS5</Link>
                    </li>

                    {/* Dropdown for Handhelds */}
                    <li className="relative">
                        <button onClick={() => setDropdown(!dropdown)} className="hover:text-gray-400">
                            Handhelds ▼
                        </button>
                        {dropdown && (
                            <ul>
                                <li>
                                    <Link to="/psp" className="block px-4 py-2 hover:bg-gray-700">PSP</Link>
                                </li>
                                <li>
                                    <Link to="/ps-vita" className="block px-4 py-2 hover:bg-gray-700">PS Vita</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;