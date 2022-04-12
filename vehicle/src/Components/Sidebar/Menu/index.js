import React from 'react';
import './style.css'
import config from '../../../Config/config.json'
import {Link} from "react-router-dom";
function Menu({sideBar}) {
    return ( 
      
        <div className="items" style={{ display: sideBar ? "block" : "none" }}>

        <ul>

       <li>  <Link to={"/Dashboard"}>Dashboard</Link></li>
       <li><Link to={"/Vehicles"}>Vehicles</Link><br /></li>
       <li><Link to={"/Services"}>Services</Link><br /></li>
       <li><Link to={"/Drivers"}>Drivers</Link><br /></li>
      
       </ul>
        
      </div>
    );
} 

export default Menu;