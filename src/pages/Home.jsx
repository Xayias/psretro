import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <main className="flex items-center justify-center h-screen bg-black">
                <h1 className="text-4xl font-bold text-white">Welcome to PS Retro</h1>
            </main>
        </>
    );
};

export default Home;