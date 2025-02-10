import React from 'react'
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center h-screen bg-black">
                <h1 className="text-4xl font-bold text-white">Welcome to PS Retro</h1>
                <Hero />
            </main>
        </>
    );
};

export default Home;