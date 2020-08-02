import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client';
import VideoGrid from '../component/VideoGrid/VideoGrid';
import BroadCastPanel from '../component/BroadCastPanel/BroadCastPanel';

function Room() {
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        const socketio = io(process.env.REACT_APP_SOCKET_URL);
        socketio.emit('join',{roomid,displayName:"User."+Math.round(Math.random() * 10000)});
        socketio.on('broadcast',(data) => {
            const message = {
                displayName:data.displayName,
                messageContent: "Joined the room."
            }
            setMessages(messages => [
                ...messages,
                message
            ]);
        })
    },[]);
    const {roomid} = useParams();
    return (
        <div className="flex px-4" style={{"height":"600px"}}>
            <VideoGrid />
            <BroadCastPanel data={messages}/>
        </div>
    )
}

export default Room
