import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../profile.png";
import './Components.css'; 
import { FaBars } from 'react-icons/fa';
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";

const Navigation = ({ isCollapsed, toggleSidebar }) => {
  const iconStyle = { fontSize: '30px' };
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <Button onClick={toggleSidebar} className="burgerButton">
      <FaBars style={iconStyle}/>
      </Button>
      <Navbar bg="#343a40" variant='dark' className={`flex-column ${isCollapsed ? 'collapsed' : ''}`}>
        <Nav className="flex-column">
         <Nav.Link as={Link} to="/profile"> {isCollapsed ? <CgProfile  style={iconStyle} /> : <img src={logo} alt="Logo"/>} </Nav.Link>
          <Nav.Link as={Link} to="/">{isCollapsed ? <MdDashboard  style={iconStyle}/>: "Dashboard"}</Nav.Link>
          <Nav.Link as={Link} to="/productlist">{isCollapsed ? <IoBagHandleSharp  style={iconStyle}/> : "Product"}</Nav.Link>
          <Button onClick={toggleSidebar} className="logoutButton">
          <IoMdLogOut />
        </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
