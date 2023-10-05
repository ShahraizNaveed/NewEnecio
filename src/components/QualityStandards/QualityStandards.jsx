import "./QualityStandards.css";
import { Col, Container, Row } from "react-bootstrap";
import bullet from "../../assets/images/about/bullet.png";
import quality2 from "../../assets/images/about/quality-2.png";

const QualityStandards = () => {
  return (
    <section className="quality-section">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Our Quality Standards</h4>
            <div className="d-flex justify-content-between bullet-para">
              <div>
                <img src={bullet} alt="icon" className="img-fluid" />
              </div>
              <p>
                Eneico offers a wide range of construction machinery, from
                excavators to cranes, providing comprehensive solutions to meet
                all your equipment needs.
              </p>
            </div>

            <div className="d-flex justify-content-between bullet-para">
              <div>
                <img src={bullet} alt="icon" className="img-fluid" />
              </div>
              <p>
                Our customer-centric philosophy means that your satisfaction
                is our top priority. We tailor our services to your specific
                project requirements, ensuring a seamless experience.
              </p>
            </div>

            <div className="d-flex justify-content-between bullet-para">
              <div>
                <img src={bullet} alt="icon" className="img-fluid" />
              </div>
              <p>
                Count on Eneico for reliable, well-maintained machinery that
                minimizes downtime, helping you meet project deadlines and
                maximize productivity.
              </p>
            </div>

            <div className="d-flex justify-content-between bullet-para">
              <div>
                <img src={bullet} alt="icon" className="img-fluid" />
              </div>
              <p>
                With a global presence and a local touch, Eneico is your
                trusted partner wherever your construction projects take you. We
                provide support and solutions wherever you are located.
              </p>
            </div>
          </Col>

          <Col md={1}></Col>

          <Col md={5}>
            <section>
              <div className="relative">
                <img src={quality2} alt="quality" className="img-fluid quality-image" />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualityStandards;
