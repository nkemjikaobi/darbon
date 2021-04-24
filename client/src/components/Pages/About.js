import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Founders from '../AboutScreen/Founders'
// import { LinkContainer } from 'react-router-bootstrap'
import wavyTech from '../../assets/Wavy_Tech-03_Single-10-min_prev_ui.png'

const About = () => {
    return (
        <Fragment>
            <section id="about">
                <Container fluid id="about_cover">
                    <span className="about_main_title">Providing access to financial </span>
                    <span className="about_main_title">services for all Africans</span>
                    <img src={wavyTech} alt="" className="about_image" />
                    <span className="about_subtitles">Our Mission</span>
                    <p id="about_p_first">We believe access to credit and quality financial services is a human right. Our mission is to empower all people with the financial access they need to pursue a life of dignity and prosperity.</p>
                    <span className="about_subtitles">Who we are</span>
                    <p id="about_p_second">We empower individuals with access to credit, simple payments solutions, high-yield investment opportunities and easy-to-use tools for personal financial management. Darbon is headquartered in Lagos, Nigeria. We are a global company of over 90 employees with operations in Nigeria, Ghana and Kenya</p>
                </Container>
            </section>
            <Founders />
        </Fragment>
    )
}

export default About
