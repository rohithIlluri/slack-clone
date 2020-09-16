import React ,{ useState , useEffect } from 'react';
import './Chat.css';
import{ useParams } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase'



function Chat() {
 
    const { roomId } = useParams();
    const [ roomDetails , setRoomDetails ] = useState(null)
    const [ roomMessages, setroomMessages]= useState()

    useEffect(() => {   
           if  (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot (snapshot => (setRoomDetails(snapshot.data())))
  }

      db.collection( 'rooms').doc(roomId)
      .collection('message')
      .orderBy('timestamp' , 'asc')
      .onSnapshot(
           setroomMessages(
             snapshot.docs.map(doc.data()))

      )
    }, [roomId]) ;

    console.log( roomDetails );
    console.log( roomMessages );

    return (

        <div className="chat">
          <div className= "chat__header"><h2>{roomId}</h2>

             <div className="chat__headerLeft">
               <h4 className="chat__channelName">
                   <strong>#{roomDetails?.name}</strong><StarIcon/></h4> </div>

                     <div className= "chat__headerRight " >
                            <p>
                          <InfoOutlinedIcon/>Details </p>
                     </div>
             </div>
        </div>

    )
}

export default Chat;
