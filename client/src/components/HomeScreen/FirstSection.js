import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import sectionImage from '../../assets/19197296.png'

const FirstSection = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col md={5} sm={12} xs={12} className="first_section_title align-middle">
                        <span>Get a loan of up to ₦500,000 within 5 minutes!</span>
                        <p>Download the Darbon mobile app and get up to ₦500,000 loan sent straight into your bank account within minutes. No paperwork. No collateral.</p>
                        <LinkContainer to='/login'>
                                <Nav.Link className="button"><button>get started</button></Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col md={7} sm={12} xs={12}>
                        <img src={sectionImage} alt="" className="first_section_image" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FirstSection
