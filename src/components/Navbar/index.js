import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
               <NavbarContainer>
                 <NavLogo to='/'>MiphTech</NavLogo> 
                  <MobileIcon>
                     <FaBars /> 
                  </MobileIcon> 
                  <NavMenu>
                       <NavItem>
                       <NavLinks to="home">Home</NavLinks>  
                    </NavItem>
                     <NavItem>
                       <NavLinks to="about">About</NavLinks>  
                    </NavItem> 
                     <NavItem>
                       <NavLinks to="contact">Contact Us</NavLinks>  
                    </NavItem>
                     <NavItem>
                       <NavLinks to="signup">Sign Up</NavLinks>  
                    </NavItem>
                    </NavMenu> 
                    <NavBtn>
                        <NavBtnLink to = "/signin">SIgn In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>  
            </Nav>
        </>
    );
};

export default Navbar
