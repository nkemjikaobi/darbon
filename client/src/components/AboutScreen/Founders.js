import React from 'react'
import { Container } from 'react-bootstrap'

const Founders = () => {
    return (
        <section>
            <Container fluid id="founders_cover">
                <span class="about_subtitles">Our Founders</span>
                <div id="founders_section">
                    <div className="founders_item mb-5">
                        <div class="founder_image">

                        </div>
                        <div className="founders_body">
                            <span class="founder_name">Derick Obi</span>
                            <p class="founder_description">Co-founder & CEO</p>
                            <p class="description">Derick Obi was an investment analyst at the international Finance Corporation and an investment associate at Zephyr Management LP in the US and South Africa. He holds an MBS from Harvard Business School.</p>
                            <a href="https://www.linkedin.com/in/nkemjikaobi/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="founders_item mb-5">
                        <div class="founder_image">

                        </div>
                        <div className="founders_body">
                            <span class="founder_name">Fumnanya Akupue</span>
                            <p class="founder_description">Co-founder & Managing Director</p>
                            <p class="description">Fumnanya Akupue was an was an investment banker at JPMorgan in New York, a business process risk consultant at Arthur  Andersen UK and a financial analyst at Deloitte & Touche. She holds an MBA from Wharton School and is a CFA Charter holder.</p>
                            <a href="https://www.linkedin.com/in/nkemjikaobi/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div> 
                </div>
            </Container>
        </section>
    )
}

export default Founders
