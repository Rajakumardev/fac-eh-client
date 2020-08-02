import React from 'react'
import MessageItem from '../MessageItem/MessageItem'

function BroadCastPanel(props) {
    return (
        <div className="flex-none bg-white h-full w-1/4 rounded-lg shadow-lg">
            <h1 className="p-2 rounded-lg mb-4 text-lg m-4 font-semibold text-white bg-gray-800">Timeline</h1>
            <div className="overflow-y-scroll w-full p-4" style={{"height":"85%"}}>
                {
                    props.data.length > 0 && props.data.map((message,index) => {
                        return <MessageItem data = {message} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default BroadCastPanel
