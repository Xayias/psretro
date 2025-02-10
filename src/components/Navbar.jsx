import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex space-x-6 items-center text-lg font-semibold">
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
            </div>
        </nav>
    );
};

export default Navbar;