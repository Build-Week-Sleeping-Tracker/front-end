import React from "react";
import styled from "styled-components";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <Navbar>
      <LogoWrap>
        <Icon />
        <Navtitle>Sleep Tracker</Navtitle>   
      </LogoWrap>
      <nav>
        <Navlist>
          <Navitem>
            <Navlinks href="/home">Home</Navlinks>
          </Navitem>
          <Navitem>
            <Navlinks href="https://austin-greer-unit1-buildweek.netlify.app/about.html">
              About
            </Navlinks>
          </Navitem>
          <Navitem>
            <Navlinks href="/login">Login</Navlinks>
          </Navitem>
          <Navitem>
            <Navlinks href="/signup">Sign Up</Navlinks>
          </Navitem>
        </Navlist>
      </nav>
    </Navbar>
  );
};

export default NavBar;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #666666;
  height: 15vh;
`;

const Navtitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-family: sans-serif;
  font-weight: normal;
`;

const Navlist = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const Navitem = styled.li`
  margin: 0px 30px;
  font-size: 2rem;
  font-family: sans-serif;
`;

const Navlinks = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: none;
  }
`;

const BedIcon = styled(FontAwesomeIcon)`
  color: white;
`

const Icon = () => {

    return (
        
        <BedIcon 
            icon={faBed}
            size="2x"
        />
    );
}

const LogoWrap = styled.div`
    border: 1px solid red;
    width: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`