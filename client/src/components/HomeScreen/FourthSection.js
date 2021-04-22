import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import project44 from '../../assets/Project_44-02-removebg.png'

const FourthSection = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col md={5} sm={12} xs={12} className="fourth_section_title">
                        <span className="mb-3">Instant loans</span>
                        <p id="access-to-credit">We make access to credit simple and easy. No guarantors, collaterals, or long forms.</p>
                        <LinkContainer to='/login'>
                                <Nav.Link className="button"><button>learn more  <i className="fas fa-chevron-circle-right"></i></button></Nav.Link>
                        </LinkContainer>
                        <p id="receive-funds">Apply 24/7 and receive funds in your Darbon account instantly. Unlock higher loan amounts and lower interest rates by repaying loans on time.</p>
                    </Col>
                    <Col md={7} sm={12} xs={12} className="align-middle">
                        <img src={project44} alt="" className="fourth_section_image" />
                    </Col>
                </Row>
            </Container>
    </>
    )
}

export default FourthSection
