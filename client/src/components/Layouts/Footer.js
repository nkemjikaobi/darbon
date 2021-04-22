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
                                <span id='darbon'>Darbon</span>
                            </Navbar.Brand>
                        </LinkContainer>
                    </Col>

                    <Col md={2} xs={12}>
                        <span className="footer_title">Features</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Darbon account</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr- links">Payments</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Cards</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Investments</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12}>
                        <span className="footer_title">Company</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Careers</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Blog</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12}>
                        <span className="footer_title">Help</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Community</Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={2} xs={12}>
                        <span className="footer_title">Legal</span>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Privacy Policy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                                <Nav.Link className="mr-3 links">Terms and Conditions</Nav.Link>
                        </LinkContainer>
                    </Col>
                   
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
