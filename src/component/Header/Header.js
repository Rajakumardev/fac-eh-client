import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="h-20 flex items-center justify-between px-4">
            <h1 className="text-white text-2xl py-2 px-4 font-sans text-gray-800 bg-white font-bold rounded-lg shadow-lg select-none">
                fac-eh
            </h1>
            <div id="nav" className="text-white text-2xl py-2 px-4 font-sans text-gray-800 bg-white font-bold rounded-lg shadow-lg select-none">
                <Link to="/" className="inline-block mx-6 hover:underline">Home</Link>
                <Link to="/about" className="inline-block mx-6 hover:underline">About</Link>
                <Link to="/" className="inline-block mx-6 hover:underline">Github</Link>
            </div>
        </div>
    )
}

export default Header
