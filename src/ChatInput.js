import React from 'react'
import "./ChatInput.css";
import db from "./firebase" ;
import { useStateValue } from "./StateProvider";

function ChatInput( { channelName, channelId }) {
    const [ input, SetInput] =useState('');

    
    const sendMessage = e =>{
    e.preventDefault();
     if (!channelId) {
         db.collection('rooms').doc(channelId).collection ({
         message: input,
         timestamp: firebase.firestore.FieldValue.server,
         user: user.displayName ,
         userImage: user.photoURL,
     }) ;

    }
    };

    return (
        <div classname='chatInput'>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.targetvalue) }
                placeholder=  { 'Message #${channelName?.toLowerCase()}'}/>;
                <button type="submit" onClick= {sendMessage}>
                    SEND
                </button>
            </form>
            
        </div>
    )
}

export default ChatInput
