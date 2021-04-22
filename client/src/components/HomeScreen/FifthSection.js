import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import credit_card from '../../assets/credit_card.png'

const FifthSection = () => {
    return (
        <>
        <Container fluid className="mt-5">
            <Row>
                <Col md={7} xs={12}>
                    <img src={credit_card} alt="" className="third_section_image" />
                </Col>
                <Col md={5} xs={12} className="third_section_title">
                    <span className="mb-3">Darbon cards</span>
                    <p id="bank-with-peace-of-mind">Virtual or Physical? Choose one. Or both.</p>
                    <p id="enjoy-cheaper-transactions">Our physical debit cards give you access to cash withdrawals anywhere. And with our secure virtual cards, you can pay for products on your favourite online stores, in dollars.</p>
                    <LinkContainer to='/login'>
                            <Nav.Link className="button"><button>learn more  <i className="fas fa-chevron-circle-right"></i></button></Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default FifthSection
