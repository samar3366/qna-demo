import React from "react";
import { Navbar, Container } from "react-bootstrap";

import "./Header.scss";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Pharma Test</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ height: "60px" }}></div>
    </>
  );
};

export default Header;
