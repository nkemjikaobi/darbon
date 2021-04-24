import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Nav, Navbar, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header className="mt-4 nav_title">
              <Navbar expand="lg" fixed="top" collapseOnSelect>
                <Container >
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                        <img
                        alt=""
                        src="logo192.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                            <span id='darbon'>Darbon</span>
                        </Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav_links">
                            <LinkContainer to='/'>
                                <Nav.Link className="mr-3 links">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links links_about">About</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/blog'>
                                <Nav.Link className="mr-3 links">Blog</Nav.Link>
                            </LinkContainer> */}

                            <LinkContainer to='/login'>
                                <Nav.Link className="sign_in"><button>Sign In</button></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/register'>
                                <Nav.Link className="sign_in"><button>Join us</button></Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
