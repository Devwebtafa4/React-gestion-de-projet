// src/components/Menu.js

import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom

const Menu = () => {
  return (
    <Nav className="ms-auto">
      {/* Liens de navigation principaux */}
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">À propos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav.Item>

      {/* Dropdown menu */}
      <Nav.Item>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Dropdown"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
