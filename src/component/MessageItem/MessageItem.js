import React, { Fragment } from 'react'

function MessageItem(props) {
    const {displayName,messageContent} = props.data;
    return (
     <Fragment>
         <div className="w-full border rounded-lg my-2">
             <div className="p-2 bg-gray-600 text-white  rounded-t-lg">
                 {displayName}
             </div>
             <div className="p-2 text-gray-700">
                 {messageContent}
             </div>
         </div>
     </Fragment>
    )
}

export default MessageItem
