import React from 'react'
import "./PassionBanner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PassionBanner = () => {
    return (
        <section className="passion-banner">
            <Container>
                <Row>
                    <Col md={9} className='d-flex align-items-center'>
                        <h2>We have the skills and passion to get the job done!</h2>
                    </Col>
                    <Col md={3}>
                        <Link to="/services">
                            <button className="passion-btn">
                                View Services
                            </button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PassionBanner