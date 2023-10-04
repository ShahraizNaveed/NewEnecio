import React from "react";
import "./HaveSomeQuestions.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";

const HaveSomeQuestions = () => {
  return (
    <section className="haveSomeQuestions-section">
      <Container>
        <Row>
          <div className="my-5">
            <h1 className="text-center">Have Some Questions</h1>
            <p className="text-center questions-para">
              Thank you for your interest in our services. Please kindly
              complete the form below, or feel free to reach out to us via the
              provided email address. We assure you of our prompt response to
              your request.
            </p>
          </div>
          <Col md={4} className="d-flex justify-content-center">
            <div className="questions-div my-3">
              <div className="question-icon">
                <MdLocationOn size={25} />
              </div>
              <p className="mx-3">
                No. 38, Huaxing Road,Jiuhua Town,Rugao City, Jiangsu, China
              </p>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <div className="questions-div my-3">
              <div className="question-icon">
                <MdOutlineEmail size={25} />
              </div>
              <div className="mx-3 side-icon-div">
                <p>
                  <a href="mailto:Info@eneico.com">Info@eneico.com</a>
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <div className="questions-div my-3">
              <div className="question-icon">
                <FiPhoneCall size={25} />
              </div>
              <div className="mx-3 side-icon-div">
                <p>
                  <a href="tel:0086 177 1463 8823">+ 0086 177 1463 8823</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HaveSomeQuestions;
