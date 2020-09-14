import React from 'react';
import './Chat.css';
import{ useParams } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';

function Chat() {
 
    const { roomId } = useParams();

    return (

        <div className="chat"><h2>
            you are in the  {roomId} room </h2>
            <div className= "chat__header">
             <div className="chat__headerLeft">
               <h4 className="chat__channelName">
                   <strong>#general</strong><StarIcon/></h4>

             </div>



             <div classnmae= "chat__headerRight " ></div>
            </div>

            </div>

    )
}

export default Chat;
