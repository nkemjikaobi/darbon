import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SixthSection = () => {
    return (
        <>
            <Container fluid >
                <Row>
                    <span>A digital bank made just for you</span>
                    <p>Open a new Carbon bank account from your phone or computer and follow the simple on-screen steps to register for an account in minutes.</p>
                    <Row>
                        <Col md={3}>
                            <button>
                                <div className="d-flex">
                                    <i className="fab fa-google-play"></i>
                                    <div className="d-flex flex-column">
                                        <span>GET IT ON</span>
                                        <span>Google Play</span>
                                    </div>
                                </div>
                            </button>
                        </Col>
                        <Col md={3}>
                            <button>
                                <div className="d-flex">
                                    <i className="fab fa-apple"></i>
                                    <div className="d-flex flex-column">
                                        <span>Download on the</span>
                                        <span>App Store</span>
                                    </div>
                                </div>
                            </button>
                        </Col>
                        <Col md={3}>
                            <button>
                                <div className="d-flex">
                                    <i className="fas fa-mobile"></i>
                                    <div className="d-flex flex-column">
                                        <span>Available via</span>
                                        <span>USSD *007#</span>
                                    </div>
                                </div>
                            </button>
                        </Col>
                        <Col md={3}>
                            <button>
                                <div className="d-flex">
                                    <i className="fab fa-chrome"></i>
                                    <div className="d-flex flex-column">
                                        <span>Use on your</span>
                                        <span>Web Browser</span>
                                    </div>
                                </div>
                            </button>
                        </Col>
                    </Row>
                </Row>
            </Container> 
        </>
    )
}

export default SixthSection
