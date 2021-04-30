import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaBars } from "react-icons/fa";
import styled from "styled-components";

import TextLink from "./TextLink";
import NavItem from "./NavItem";

import { color, breakpoint } from "@theme/config";

// Images
import logo from "../img/Logo.png";

const StyledNavbar = styled.nav`
  color: ${color.white};
  background-color: ${color.secondary};
  margin: 0;
  padding: 1.2em 0;
`;

const NavbarNav = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;

  list-style-type: none;
  margin: 0;
  padding: 0;

  margin-top: ${({ isOpen }) => (isOpen ? "1em" : 0)};

  ${breakpoint.md} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;

    margin-top: 0;
  }
`;

const NavBarToggle = styled.a`
  position: absolute;
  top: 35px;
  right: 30px;
  cursor: pointer;
  font-size: 24px;

  ${breakpoint.md} {
    display: none;
  }
`;

const NavbarBrand = styled(TextLink)`
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  ${breakpoint.md} {
    margin-bottom: 0;
  }
`;

const NavImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5em;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${breakpoint.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const SocialItem = styled(NavItem)`
  display: none;

  ${breakpoint.md} {
    display: inline;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <StyledNavbar>
      <NavContainer className="container">
        <NavBarToggle onClick={toggle}>
          <FaBars />
        </NavBarToggle>
        <NavbarBrand to="/" className="navbar-brand bold">
          <NavImage alt="CyberSoc logo" src={logo} />
          CyberSoc
        </NavbarBrand>
        <NavbarNav isOpen={isOpen}>
          <NavItem to="/about" text="About" />
          <NavItem to="/blog" text="Blog" />
          <NavItem to="/resources" text="Resources" />
          <NavItem to="/contact" text="Contact" />
          <SocialItem
            to="https://twitter.com/cybersocyork"
            text={<FaTwitter />}
            hover={"#1da1f2"}
          />
          <SocialItem
            to="https://facebook.com/cybersocyork"
            text={<FaFacebookF />}
            hover={"#3b5998"}
          />
        </NavbarNav>
      </NavContainer>
    </StyledNavbar>
  );
};

export default Navbar;
