import React, { useState } from 'react';
import {

    FaBars,
    FaAddressBook,
    FaCogs,
    FaArrowLeft
    

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../styles/sidebar.css" 


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[

        {
            path:"/Account",
            name:"Account",
            icon:<FaAddressBook/>
        },
        {
            path:"/AvaliableOptions",
            name:"Avaliable Options",
            icon:<FaCogs/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "260px" : "80px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">BTCFever</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "8px"}} className="bars">
                   {isOpen ? <FaArrowLeft onClick={toggle} /> : <FaBars onClick={toggle} />}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active"
                       onClick={isOpen ? toggle : undefined}
                       >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;