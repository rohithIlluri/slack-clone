import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import EmailIcon from '@material-ui/icons/Email';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MessageIcon from '@material-ui/icons/Message';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase" ;

function Sidebar()  {
    const [channels,setChannels] = useState([]);
      useEffect(() => {
          db.collection( 'rooms' ).onSnapshot(Snapshot => (
             setChannels(
                 Snapshot.docs.map(doc =>({
                  id: doc.id,
                  name: doc.data().name
                 }))
             )
          )  
          );
          
      }, [])

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className ="sidebar__info">
                <h2>Welcome Ninja's</h2>
                <h3>
                <FiberManualRecordIcon/>
                Rohith Illuri</h3>
                </div><CreateIcon/></div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption  title="Youtube"/>
            <SidebarOption Icon={FavoriteIcon} title= "Favortite"/>
            <SidebarOption Icon={PermMediaIcon} title= "Media"/>
            <SidebarOption Icon={CreateNewFolderIcon} title= "New Folder"/>                    
            <SidebarOption Icon={DataUsageIcon} title= "Usage"/>
            <SidebarOption Icon={EmailIcon} title="Email"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Music"/>
            <SidebarOption Icon={MessageIcon} title="Message"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={ExpandLessIcon} title="Showless"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="AddChannel"/>
   
              {/*connect to db and list all the channels*/}
              {/*<sidebaroption.../>*/}

            {channels.map( (channel ) => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}

    
        </div>  
    )
}

export default Sidebar;

