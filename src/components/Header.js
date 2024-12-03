// src/components/Header.js

import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, InputGroup, FormControl } from 'react-bootstrap';  // Ajouter Nav ici
import Menu from './menu';  // Importer le composant Menu

function Header() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Vous pouvez traiter la recherche ici, par exemple :
    alert(`Vous avez recherché : ${query}`);
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Utilisation du composant Menu ici */}
          <Menu />

          {/* Champ de recherche */}
          <Nav className="ms-auto">
            <InputGroup>
              <FormControl
                placeholder="Rechercher..."
                aria-label="Rechercher"
                aria-describedby="basic-addon2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-primary" onClick={handleSearch}>
                Recherche
              </Button>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
