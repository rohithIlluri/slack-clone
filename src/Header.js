import React from 'react'
import './Header.css';
import Avatar from '@material-ui/icons/AccountCircle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from './StateProvider';
import { Avatar } from '@material-ui/core';


function Header() {
    const [{ user }] =useStateValue();
    return (
        <div className= "header">
            <div className='header__left'>
                <Avatar className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                 /> 
                <AccessTimeIcon/>

                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="search "/>

                </div>

                <div className="header__right">
                    <HelpIcon/>
                </div>

                
            
            </div>
            
        </div>
    )
}

export default Header
