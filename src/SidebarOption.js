import React from 'react';
import "./SidebarOption.css";

function SidebarOption({Icon,title}) {
    return (
        <div className="sidebaroption">

            {Icon && <Icon className="sidebaroption__icon"/>}
            {Icon ? ( <h3>{title}</h3>):(<h3
            className="sidebaroption__channel"><span className="sidebar__hash">#</span> {title}</h3>)}

        </div>
    )
}

export default SidebarOption
