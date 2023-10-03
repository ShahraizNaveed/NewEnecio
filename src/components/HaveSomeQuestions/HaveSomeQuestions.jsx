import React from 'react'
import "./HaveSomeQuestions.css"
import { Col, Container, Row } from 'react-bootstrap'
import { MdLocationOn, MdOutlineEmail } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { BiSolidPhoneCall } from "react-icons/bi"

const HaveSomeQuestions = () => {
  return (
    <section className='haveSomeQuestions-section'>
      <Container>
        <Row>
          <div className='my-5'>
            <h1 className='text-center'>Have Some Questions</h1>
            <p className='text-center questions-para'>
              Thankyou for your intrest in our services. Please filllout the form bellow or or email us at given id and we will get back to you promptly regarding your request.
            </p>
          </div>
          <Col md={4} className='d-flex justify-content-center'>
            <div className='questions-div my-3'>
              <div className='question-icon'>
                <MdLocationOn size={25} />
              </div>
              <p className='mx-3'>
                125, Suitland Street, square
                road, california, BR1 USA
              </p>
            </div>
          </Col>

          <Col md={4} className='d-flex justify-content-center'>
            <div className='questions-div my-3'>
              <div className='question-icon'>
                <MdOutlineEmail size={25} />
              </div>
              <div className='mx-3'>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
                <p>
                  <a href="mailto:support@example.com">support@example.com</a>
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className='d-flex justify-content-center'>
            <div className='questions-div my-3'>
              <div className='question-icon'>
                <FiPhoneCall size={25} />
              </div>
              <div className='mx-3'>
                <p>
                  <a href="tel:+7-(111)-123-4567-89">+7-(111)-123-4567-89</a>
                </p>
                <p className=''>
                  <a href="tel:+1-(981)-8745-554">+1-(981)-8745-554</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default HaveSomeQuestions