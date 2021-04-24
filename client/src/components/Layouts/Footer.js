import React from 'react'
import { Container, Row, Col, Nav, Navbar} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container >
                <Row className="footer">
                    <Col md={{ span: 3, offset: 1 }} xs={12} >
                        <LinkContainer to='/'>
                            <Navbar.Brand >
                            <img
                            alt=""
                            src="logo192.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            />{' '}
                                <span id='darbon_footer'>Darbon</span>
                            </Navbar.Brand>
                        </LinkContainer>
                    </Col>

                    <Col md={2} xs={12} className="darbon_footer">
                        <span className="footer_title">Features</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className=" darbon_links">Darbon account</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Payments</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Cards</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Investments</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12} className="darbon_footer">
                        <span className="footer_title">Company</span>
                        <LinkContainer to='/'>
                                <Nav.Link className="mr-3 darbon_links">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/careers'>
                                <Nav.Link className="mr-3 darbon_links">Careers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/blog'>
                                <Nav.Link className="mr-3 darbon_links">Blog</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12} className="darbon_footer">
                        <span className="footer_title">Help</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Community</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12} className="darbon_footer">
                        <span className="footer_title">Legal</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Privacy Policy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 darbon_links">Terms and Conditions</Nav.Link>
                        </LinkContainer>
                    </Col>
                   
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
