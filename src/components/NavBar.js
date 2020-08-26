import React from "react";
import styled from "styled-components";

const Navbar = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    height: 15vh;
`

const Navtitle = styled.h1`

    border: 2px solid green;
    color: white;
    font-size: 2.5rem;

`

const Navlist = styled.ul`

    border: 1px solid green;
    display: flex;
    flex-direction: row;
    list-style-type: none;

`

const Navitem = styled.li`

   margin: 0px 30px;
   font-size: 2rem;

`

const Navlinks = styled.a`

    text-decoration: none;
    color: white; 
   
    &:hover {

        text-decoration: none;
    
    }
` 

const NavBar = () => {

    return (

        <Navbar>
            <Navtitle>Sleep Tracker</Navtitle>
            <nav>
                <Navlist>
                    <Navitem><Navlinks href="/home">Home</Navlinks></Navitem>
                    <Navitem><Navlinks href="#">About</Navlinks></Navitem>
                    <Navitem><Navlinks href="#">Login</Navlinks></Navitem>
                    <Navitem><Navlinks href="#">Sign Up</Navlinks></Navitem>
                </Navlist>
            </nav>        
        </Navbar>

    )

};

export default NavBar;