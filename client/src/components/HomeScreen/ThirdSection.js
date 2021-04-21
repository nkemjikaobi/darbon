import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import wavyBus from '../../assets/Wavy_Bus-29_Single-09.png'

const ThirdSection = () => {
    return (
        <>
        <Container fluid className="mt-5">
            <Row>
                <Col md={7} xs={12}>
                    <img src={wavyBus} alt="" className="third_section_image" />
                </Col>
                <Col md={5} xs={12} className="third_section_title">
                    <span className="mb-3">Darbon account</span>
                    <p id="bank-with-peace-of-mind">Bank with peace of mind</p>
                    <p id="enjoy-cheaper-transactions">Your Darbon account allows you enjoy cheaper transactions, zero account fees, and an annual interest of 2% per annum.</p>
                    <LinkContainer to='/login'>
                            <Nav.Link className="button"><button>learn more  <i className="fas fa-chevron-circle-right"></i></button></Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default ThirdSection
