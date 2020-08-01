import React from 'react'

function Header() {
    return (
        <div className="h-20 flex items-center justify-between px-4">
            <h1 className="text-white text-2xl py-2 px-4 font-sans text-gray-800 bg-white font-bold rounded-lg shadow-lg select-none">
                fac-eh
            </h1>
            <div id="nav" className="text-white text-2xl py-2 px-4 font-sans text-gray-800 bg-white font-bold rounded-lg shadow-lg select-none">
                <a href="" className="inline-block mx-6 hover:underline">About</a>
                <a href="https://github.com/Rajakumardev/fac-eh-client" target="_blank" className="inline-block mx-6 hover:underline">Github</a>
            </div>
        </div>
    )
}

export default Header
