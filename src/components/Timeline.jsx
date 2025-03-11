import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PS1Console from "../assets/ps1/PSX-Console-wController.webp";
import PS1Marketing from "../assets/ps1/3980894-ps1-classic.webp"
import ff7PS1Img from "../assets/ps1/final-fantasy-7-ps1-wide-1.webp";

const consoles = [
    {
        id: "ps1",
        name: "PlayStation 1",
        year: "1994",
        image: PS1Console,
        events: [
            {
                id: "ps1-event1",
                title: "Launch of PlayStation 1",
                description: "Sony enters the gaming market with the revolutionary PlayStation.",
                image: PS1Marketing,
            },
            {
                id: "ps1-event2",
                title: "Final Fantasy VII Released",
                description: "One of the most iconic RPGs of all time debuts on the PS1.",
                image: ff7PS1Img,
            },
        ],
    },
    {
        id: "ps2",
        name: "PlayStation 2",
        year: "2000",
        image: "",
        events: [
            {
                id: "ps2-event1",
                title: "Best-Selling Console Ever",
                description: "The PS2 becomes the best-selling console of all time.",
                imag: "",
            },
            {
                id: "ps2-event2",
                title: "Grand Theft Auto III Released",
                description: "GTA III revolutionizes opem-world gaming.",
                image: "",
            },
        ],
    },
];

export default function PlayStationTimeline() {
    const [activeConsole, setActiveConsole] = useState(null);

    return(
        <div className="relative w-full max-w-4xl mx-auto p-6">
            <div className="sticky top-1/4 left-4 bg-gray-800 p-4 rounded-lg text-white">
                <h3 className="text-lg font-bold">Table of Contents</h3>
                <ul>
                    {consoles.map((console) => (
                        <li key={console.id}>
                            <button className="text-blue-400 hover:text-blue-600" onClick={() => setActiveConsole(console.id)}>{console.name}</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative border-l-4 border-blue-500 pl-8">
                {consoles.map((console) => (
                    <motion.div key={console.id} className="realtive mb-10 cursor-pointer" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg relative inline-block" onClick={() => setActiveConsole(activeConsole === console.id ? null: console.id)}>
                            <img src={console.image} alt={console.name} className="w-24 mx-auto" />
                            <h2 class="text-lg font-bold text-center mt-2">{console.name} ({console.year})</h2>
                        </div>
                        {activeConsole === console.id && (
                            <AnimatePresence>
                                <motion.div className="mt-4 border-l-4 border-blue-400 pl-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                                    {console.events.map((event) => (
                                        <motion.div key={event.id} className="mt-4 bg-gray-800 p-4 text-white rounded-lg shadow-md" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50}}>
                                            <img src={event.image} alt={event.title} className="w-16 mx-auto mb-2" />
                                            <h3 className="text-md font-semibold">{event.title}</h3>
                                            <p className="text-sm">{event.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}