import React from 'react';
import"./Message.css" ;

function Message({ message, timestamp, user , userImage}) {
    return ( <div classname="message">
        <img src={userImage} alt=""/>
        <div className="message__info" >
            <h4>{user} {new Date(timestamp?toDate()).toUTCString()}</h4>
            <p>{message}</p>
        </div>

            
        </div>
    )
}

export default Message;