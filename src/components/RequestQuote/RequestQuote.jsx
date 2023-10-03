import React from 'react'
import "./RequestQuote.css"
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import helmet from "../../assets/images/contact/helmet.png"
import equipment from "../../assets/images/contact/equipment.png"
import idea from "../../assets/images/contact/idea.png"

const RequestQuote = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        console.log(data);

        e.currentTarget.reset();
    }

    return (
        <section className='getQuote-section'>
            <Container>
                <Row>
                    <Col md={7}>
                        <p className='quote-heading'>APPOINTMENT FROM</p>
                        <h4>Request a quote</h4>

                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Control required placeholder="First name" name='first_name' />
                                    </Col>
                                    <Col>
                                        <Form.Control required placeholder="Last name" name='last_name' />
                                    </Col>
                                </Row>
                            </div>

                            <div className='mt-4'>
                                <Row>
                                    <Col>
                                        <Form.Control required placeholder="Phone" type='number' name='phone' />
                                    </Col>
                                    <Col>
                                        <Form.Select required size="md" aria-label="Default select example" name='service'>
                                            <option>Choose Service</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>

                            <div className='mt-4'>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        name='comments'
                                        as="textarea"
                                        required
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </div>

                            <button type="submit" className='submit-button'>Send</button>

                        </Form>
                    </Col>

                    <Col md={5} className='style-col'>
                        <div className='d-flex justify-content-between my-5'>
                            <div>
                                <img src={helmet} alt="" className='img-fluid' />
                            </div>

                            <div className='mx-5'>
                                <h6>High Quality Build</h6>
                                <p>Pellentesque nec efficitur felis. Nam sit amet
                                    ultrices diam</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between my-5'>
                            <div>
                                <img src={idea} alt="" className='img-fluid' />
                            </div>

                            <div className='mx-5'>
                                <h6>Unique Idea</h6>
                                <p>In hac habitasse platea dictumst. Nunc
                                    ultricies dolor nunc</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between my-5'>
                            <div>
                                <img src={equipment} alt="" className='img-fluid' />
                            </div>

                            <div className='mx-5'>
                                <h6>Modern Equipment</h6>
                                <p>suspendisse laculis lorem ipsum dolor nisl nec
                                    porttitor convallis</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RequestQuote