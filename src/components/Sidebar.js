import React, { useState } from 'react';
import '../App.css';
import {NavLink } from "react-router-dom";
import { FaTh,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag} from 'react-icons/fa';


const Sidebar = ({children}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const menuItem = [
     


        {
            path :"/anayemek",
            name: "Ana yemekler",
            icon:<FaUserAlt/>
        },
        {
            path :"/arasicak",
            name: "Ara sıcaklar",
            icon:<FaRegChartBar/>
        },
        {
            path :"/corba",
            name: "Çorbalar",
            icon:<FaCommentAlt/>
        },
        {
            path :"/tatli",
            name: "Tatlılar",
            icon:<FaShoppingBag/>
        },

    ]

    return(

        <>
        <div className="container">
            <div style={{width:isOpen ? "200px" : "60px"}} className="sidebar">

<div className="top_section">

   <h1 style= {{display: isOpen ? "block" : "none"}}className="logo"> Yemekler </h1>
   <div style= {{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
   

    <FaBars onClick={toggle}/>
   </div>

</div>

{
    menuItem.map((item, index) => (
        <NavLink to = {item.path} key = {index} className="link">

<div className='icon'>{item.icon}</div>
<div style={{display:isOpen ? "block" : "none"}}className='link_text'>{item.name}</div>

        </NavLink>

    ))
}

            </div>

            <main>{children}</main>
           
        </div>
        </>

    );
}

export default Sidebar;