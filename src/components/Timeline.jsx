import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PS1Console from "../assets/ps1/PSX-Console-wController.webp";
import PS1Marketing from "../assets/ps1/3980894-ps1-classic.webp"
import ff7PS1Img from "../assets/ps1/final-fantasy-7-ps1-wide-1.webp";

import PS2Console from "../assets/ps2/ps2-console.webp";
import PS2Launch from "../assets/ps2/ps2launch.webp";
import GTAIII from "../assets/ps2/GTA-3.webp"

import PSPConsole from "../assets/psp/PSP-1000.webp";
import PSPLaunch from "../assets/psp/psp-launch.webp";

import PS3Console from "../assets/ps3/Ps3-fat-console.webp";
import PS3Launch from "../assets/ps3/DannyZarka1stbuyerPLAYSTATION3MyerMidnightLaunch2.webp";

import PSVitaConsole from "../assets/psvita/PlayStation-Vita-1101-FL.webp";
import PSVitaLaunch from "../assets/psvita/PSVitaLaunch.webp";

import PS4Console from "../assets/ps4/PS4-Console-wDS4.webp";
import PS4Launch from "../assets/ps4/download.webp";

import PSVRConsole from "../assets/psvr/psvr-product-thumbnail-01-en-14sep21.webp";
import PSVRLaunch from "../assets/psvr/psvr-image2.webp";

import PS5Console from "../assets/ps5/Playstation5Console.webp";
import PS5Launch from "../assets/ps5/1229598487.webp";

import PSVR2Console from "../assets/psvr2/PSVR2-thumbnail-01-en-22feb22.webp";
import PSVR2Launch from "../assets/psvr2/psvr-2-hands-on-5.webp";


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
        image: PS2Console,
        events: [
            {
                id: "ps2-event1",
                title: "PS2 Launches",
                description: "The PlayStation 2 hits markets in Japan in March, later in North America in October",
                image: PS2Launch,
            },
            {
                id: "ps2-event2",
                title: "Grand Theft Auto III Released",
                description: "GTA III revolutionizes open-world gaming.",
                image: GTAIII,
            },
        ],
    },
    {
        id: "psp",
        name: "PlayStation Portable",
        year: "2005",
        image: PSPConsole,
        events: [
            {
                id: "psp-event1",
                title: "PlayStation Portable Launches",
                description: "The PSP hits markets",
                image: PSPLaunch,
            }
        ]
    },
    {
        id: "ps3",
        name: "PlayStation 3",
        year: "2006",
        image: PS3Console,
        events: [
            {
                id: "ps3-event1",
                title: "PlayStation 3 Launches",
                description: "The PS3 hits markets",
                image: PS3Launch,
            }
        ]
    },
    {
        id: "psvita",
        name: "PlayStation Vita",
        year: "2012",
        image: PSVitaConsole,
        events: [
            {
                id: "psvita-event1",
                title: "PlayStation Vita Launches",
                description: "The PS Vita hits markets",
                image: PSVitaLaunch,
            }
        ]
    },
    {
        id: "ps4",
        name: "PlayStation 4",
        year: "2013",
        image: PS4Console,
        events: [
            {
                id: "ps4-event1",
                title: "PlayStation 4 Launches",
                description: "The PS4 hits markets",
                image: PS4Launch,
            }
        ]
    },
    {
        id: "psvr",
        name: "PlayStation VR",
        year: "2016",
        image: PSVRConsole,
        events: [
            {
                id: "pspvr-event1",
                title: "PlayStation VR Launches",
                description: "The PS VR hits markets",
                image: PSVRLaunch,
            }
        ]
    },
    {
        id: "ps5",
        name: "PlayStation 5",
        year: "2020",
        image: PS5Console,
        events: [
            {
                id: "ps5-event1",
                title: "PlayStation 5 Launches",
                description: "The PS5 hits markets",
                image: PS5Launch,
            }
        ]
    },
    {
        id: "psvr2",
        name: "PlayStation VR 2",
        year: "2023",
        image: PSVR2Console,
        events: [
            {
                id: "psvr2-event1",
                title: "PlayStation VR 2 Launches",
                description: "The PS VR 2 hits markets",
                image: PSVR2Launch,
            }
        ]
    }
];

export default function PlayStationTimeline() {
    const [activeConsole, setActiveConsole] = useState(null);

    return(
        <div className="relative w-full pt-6 bg-[url('/psretro/timelinebg30opat.webp')] bg-cover bg-center bg-fixed">
            <h2 className="text-3xl font-bold text-black">PlayStation History</h2>
            <div className="relative flex p-16">
                <div className="sticky top-20 w-64 mr-8 bg-black/70 p-4 rounded-lg text-white self-start">
                    <h3 className="text-lg font-bold">Table of Contents</h3>
                    <ul>
                        {consoles.map((console) => (
                            <li key={console.id}>
                                <button className="text-blue-400 hover:text-blue-600 !bg-transparent" onClick={() => setActiveConsole(console.id)}>{console.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 border-l-4 border-blue-500 pl-8">
                    {consoles.map((console) => (
                        <motion.div key={console.id} className="relative mb-10 cursor-pointer" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div className="p-4 text-black relative inline-block" onClick={() => setActiveConsole(activeConsole === console.id ? null: console.id)}>
                                <img src={console.image} alt={console.name} className="w-60 mx-auto" />
                                <h3 class="text-lg font-bold text-center mt-2">{console.name} ({console.year})</h3>
                            </div>
                            {activeConsole === console.id && (
                                <AnimatePresence>
                                    <motion.div className="mt-4 px-6 py-1 bg-black/70 rounded-lg shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
                                        {console.events.map((event) => (
                                            <motion.div key={event.id} className="my-7 border-l-4 border-blue-500 px-4 text-white" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50}}>
                                                <img src={event.image} alt={event.title} className="w-52 mx-auto mb-2" />
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
        </div>
    );
}