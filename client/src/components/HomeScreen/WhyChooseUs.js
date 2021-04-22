import React from 'react'
import payments from '../../assets/payments.png'
import easy from '../../assets/easy.png'
import secure from '../../assets/secure.png'
import { Container, Row, Col } from 'react-bootstrap'

const WhyChooseUs = () => {
    return (
        <>
            <Container fluid>
                <div className="choose_us">
                    <h1 className="text-center">Why Choose Us</h1>
                    <p className="text-center mb-5">We’re empowering doers with easy access to loans within 5 minutes, plus longer repayment plans of up to 12 months. Take your business to the next level with a Darbon loan.</p>
                </div>
                <Row className="row_p">
                    <Col md={4} xs={12} sm={12}>
                        <img src={easy} alt="" className="choose_us_images mb-3"/>
                        <h2 className="text-center">Easy To Use</h2>
                        <p className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum, fuga incidunt consectetur veritatis rerum ipsam vero delectus beatae reprehenderit.</p>
                    </Col>
                    <Col md={4} xs={12} sm={12}>
                        <img src={payments} alt="" className="choose_us_images mb-3 mt-3"/>
                        <h2 className="text-center">Faster Payments</h2>
                        <p className="text-center mb-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum, fuga incidunt consectetur veritatis rerum ipsam vero delectus beatae reprehenderit.</p>
                    </Col>
                    <Col md={4} xs={12} sm={12}>
                        <img src={secure}  alt="" className="choose_us_images mb-3 mt-3"/>
                        <h2 className="text-center">100% Secure</h2>
                        <p className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum, fuga incidunt consectetur veritatis rerum ipsam vero delectus beatae reprehenderit.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WhyChooseUs
