import React from "react";
import { Container } from "../../constants/container";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarWrap,
  NavItemsContainer,
} from "./Navbar.style";
import logo from "../../assets/icons/logo.png";
import userIcon from "../../assets/icons/user.png";
import bagIcon from "../../assets/icons/bag.png";
import { Col, Row } from "react-grid-system";
import SearchBar from "../SearchBar/SearchBar.component";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <NavbarContainer>
      <Container lg>
        <NavbarWrap>
          <NavbarLogo src={logo} alt="Gadget & Gossip" />

          <SearchBar />

          <NavItemsContainer>
            <p>Login</p>
            <div>
              <img src={userIcon} alt="user-icon" />
            </div>
            <div>
              <img src={bagIcon} alt="bag-icon" />
            </div>
          </NavItemsContainer>

          <HiOutlineMenuAlt3 className="hamburger__icon" />
        </NavbarWrap>
      </Container>
    </NavbarContainer>
  );
}

export default Navbar;
