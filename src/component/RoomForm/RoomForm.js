import React from 'react'

function RoomForm() {
    return (
        <div className="mx-4 p-4 font-sans text-gray-800 font-bold rounded-lg flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
            <div className="mb-8 border-l-4 border-gray-700 p-2 px-5 text-gray-700">
                    <blockquote><span className="py-1 px-4 rounded-lg bg-gray-500 text-white">join</span> existing room or <span className="py-1 px-4 rounded-lg bg-gray-500 text-white">create</span> new room</blockquote>
                </div>
                <div className="mb-4 flex justify-between">
                    <input className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="invitelink" type="text" placeholder="Invite link"/>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" type="button">
                        Join
                    </button>
                </div>
                <div className="flex items-center justify-around">
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Create new room
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RoomForm
