import React, { useState } from 'react'
import {  Collapse, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand,  NavbarToggler, } from 'reactstrap'
import './style.scss'
import { LiaUserCircle } from "react-icons/lia";

const Appbar = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container fluid className='navbar-shadow'>
                <Container >
                    <Navbar {...args} expand={true} >
                        <NavbarBrand href="/">Task-Management</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                  <NavLink href="#"><LiaUserCircle size={20} color='#045B62'/> <span>Vikas</span></NavLink>
                                </NavItem>
                                
                            </Nav>
                            
                        </Collapse>
                    </Navbar>
                </Container>
            </Container>
        </div>
    )
}

export default Appbar