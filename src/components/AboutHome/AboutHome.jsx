import React from 'react'
import "./AboutHome.css";
import { Col, Container, Row } from 'react-bootstrap'
import image from "../../assets/images/about/image.png"
import { Link } from 'react-router-dom';
import icon2 from "../../assets/images/about/1.png"
import icon1 from "../../assets/images/about/2.png"

const AboutHome = (props) => {
    return (
        <section className={props.hide == "true" ? 'aboutHome-section aboutBg-color' : 'aboutHome-section bg-color'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>
                            COMFORTABLE <span className='heading-span'>JOINING</span>
                            <br />
                            IN ONE OPEN SPACE
                        </h1>
                        {
                            props.hide == "false" && <p className='small-para'>
                                We remain true to our founding values of quality, honesty and hard work.
                                <br />
                                We have the highest ethical standards in the industry
                            </p>
                        }
                        <p className='big-para'>
                            USA Construction Company, Inc was founded in 2003 and quickly established
                            a reputation of top quality work.Throughout our history, one philosophy has
                            remained Predominant.Total Quality Performance
                        </p>

                        {
                            props.hide == "true" && <div className='d-flex justify-content-between my-4'>
                                <div className='d-flex'>
                                    <div>
                                        <img
                                            src={icon1}
                                            alt="Projects"
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='mx-4'>
                                        <p className='projects-count'>2854+</p>
                                        <p className='project-complete'>Complete Projects</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div>
                                        <img
                                            src={icon2}
                                            alt="Followers"
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='mx-4'>
                                        <p className='followers'>3M</p>
                                        <p className='company-followers'>Company Followers</p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            props.hide == "false" && <Link to="/about">
                                <button className="left-side-btn">
                                    MORE ABOUT US
                                </button>
                            </Link>
                        }

                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center align-items-center right-side">
                            <div>
                                <img
                                    src={image}
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <div className="upper-portion">
                                    <div>
                                        <span className='typography-span'>08</span>
                                        <p className='typography-p'>YEARS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutHome