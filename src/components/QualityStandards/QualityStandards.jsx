import React from 'react'
import "./QualityStandards.css"
import { Col, Container, Row } from 'react-bootstrap'
import bullet from "../../assets/images/about/bullet.png"
import quality1 from "../../assets/images/about/quality-1.png"
import quality2 from "../../assets/images/about/quality-2.png"
import player from "../../assets/images/about/player-icon.png"

const QualityStandards = () => {
    return (
        <section className='quality-section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <p className='top-para'>USA Construction Company is based business </p>
                        <h4>Our Green & Quality Standards</h4>
                        <div className='d-flex justify-content-between bullet-para'>
                            <div>
                                <img src={bullet} alt="icon" className='img-fluid' />
                            </div>
                            <p>In the construction business, it can feel as though you're working with an entity, and not a team of people.</p>
                        </div>
 
                        <div className='d-flex justify-content-between bullet-para'>
                            <div>
                                <img src={bullet} alt="icon" className='img-fluid' />
                            </div>
                            <p>
                                At Bancroft, our experienced team of professionals devote their heart, time, and energy to more than just the job at hand.
                            </p>
                        </div>

                        <div className='d-flex justify-content-between bullet-para'>
                            <div>
                                <img src={bullet} alt="icon" className='img-fluid' />
                            </div>
                            <p>
                                Our story began as Stephen M. Mockbee Builders in 1975, and since then, Bancroft has experienced over 46 years of continuous growth.
                            </p>
                        </div>
                    </Col>

                    <Col md={1}></Col>

                    <Col md={5}>
                        <section>
                            <div className='relative'>
                                <img src={quality1} alt="quality" className='img-fluid' />
                                <div className='d-flex justify-content-between'>
                                    <div className='absolute'>
                                        <img src={quality2} alt="quality" className='img-fluid' />
                                    </div>
                                    <div className='absolute2'>
                                        <img src={player} alt="player-icon" className='img-fluid player-icon' />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default QualityStandards