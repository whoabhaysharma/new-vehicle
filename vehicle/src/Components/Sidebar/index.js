import React, { useState } from "react";
import './style.css'
import config from '../../Config/config.json'
import Menu from './Menu'

function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function hoverInHandler() {
    setSideBarOpen(true);
  }
  function hoverOutHandler() {
    setSideBarOpen(false);
  }

  return (
    <div
      onMouseEnter={hoverInHandler}
      onMouseLeave={hoverOutHandler}
      className="side-bar"
      style={{ width: sideBarOpen ? "30vh" : "2vh" , boxShadow: sideBarOpen? '5px 5px 10px #c9c9c9': 'none'}}
    >
     <Menu sideBar={sideBarOpen}/>
    </div>
  );
}

export default SideBar;
