import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Logo from "./permission.png"
import "./Navbar.css";
import Matric from "./Matric.png";
import Sync from "./sync.png"

const svg = <img src={Sync} alt="logo"/>


function Navbar({title1,title2}) {
    return (
        <div className="Navbar">
        
         <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"><img src={Logo} alt="Logo" />{title1}</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"><img src={Matric} alt="logo"/> {title2}</Nav.Link>
  </Nav.Item>
  
</Nav>   
<div className="nav__Info">
     
     {svg} <p>Last synced 15 mins ago</p>
          </div>

        </div>
    )
}

export default Navbar
