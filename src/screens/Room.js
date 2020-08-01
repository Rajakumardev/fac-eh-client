import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function Room() {
    const {roomid} = useParams();
    return (
        <Fragment>
            <h1>rooms: {roomid}</h1>
        </Fragment>
    )
}

export default Room
