import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client';
import VideoGrid from '../component/VideoGrid/VideoGrid';
import BroadCastPanel from '../component/BroadCastPanel/BroadCastPanel';

function Room() {
    useEffect(() => {
        const socketio = io(process.env.REACT_APP_SOCKET_URL);
        socketio.emit('join',{roomid,displayName:"rk"+Math.random()});
        socketio.on('NewUserJoined',(data) => {
            console.log(data.displayName + " Joined the room.");
        })
    });
    const {roomid} = useParams();
    return (
        <div className="flex px-4" style={{"height":"600px"}}>
            <VideoGrid />
            <BroadCastPanel/>
        </div>
    )
}

export default Room
