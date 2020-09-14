import React from 'react'
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';


function Header() {
    return (
        <div className= "header">
            <div className='header__left'>

                <AccountCircleIcon
                className="header__avatar"
                atl='rohith illuri'
                src='' 
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
