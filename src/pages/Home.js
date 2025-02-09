import React from 'react'
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to PS Retro</h1>
            </main>
        </>
    );
};

export default Home;