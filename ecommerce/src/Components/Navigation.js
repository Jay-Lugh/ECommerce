import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../profile.png";
import './Components.css'; 
import { FaBars } from 'react-icons/fa';
import { IoMdLogOut } from "react-icons/io";


const Navigation = ({ isCollapsed, toggleSidebar }) => {
 
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <Button onClick={toggleSidebar} className="burgerButton">
      <FaBars />
      </Button>
      <Navbar bg="#343a40" variant='dark' className={`flex-column ${isCollapsed ? 'collapsed' : ''}`}>
        <Nav className="flex-column">
         <Nav.Link as={Link} to="/profile"> <img src={logo} alt="Logo"/></Nav.Link>
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/productlist">Product</Nav.Link>
          <Button onClick={toggleSidebar} className="logoutButton">
          <IoMdLogOut />
        </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
