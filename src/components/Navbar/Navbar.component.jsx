import React from "react";
import { Container } from "../../constants/container";
import { NavbarContainer, NavbarLogo, NavItemsContainer } from "./Navbar.style";
import logo from "../../assets/icons/logo.png";
import userIcon from "../../assets/icons/user.png";
import bagIcon from "../../assets/icons/bag.png";
import { Col, Row } from "react-grid-system";
import SearchBar from "../SearchBar/SearchBar.component";

function Navbar() {
  return (
    <NavbarContainer>
      <Container lg>
        <Row nogutter>
          <Col xs={2.5}>
            <NavbarLogo src={logo} alt="Gadget & Gossip" />
          </Col>
          <Col xs={7.5}>
            <SearchBar />
          </Col>
          <Col xs={2}>
            <NavItemsContainer>
              <p>Login</p>
              <div>
                <img src={userIcon} alt="user-icon" />
              </div>
              <div>
                <img src={bagIcon} alt="bag-icon" />
              </div>
            </NavItemsContainer>
          </Col>
        </Row>
      </Container>
    </NavbarContainer>
  );
}

export default Navbar;
