import "./Footer.css";
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/images/logo/footer.png"
import { BsTwitter, BsYoutube, BsLinkedin, BsFacebook } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { TbMathGreater } from "react-icons/tb"


const Footer = () => {
  return (
    <section className='footer-secion'>
      <Container>
        <Row>
          <Col md={3}>
            <img
              src={logo}
              alt="Eneico"
              className='img-fluid footer-logo'
            />
            <div className="footer-icon-div">
              <span className='footer-icon mx-2'><BsFacebook /></span>
              <span className='footer-icon'><BsTwitter /></span>
              <span className='footer-icon mx-2'><BsLinkedin /></span>
              <span className='footer-icon'><BsYoutube /></span>
            </div>
          </Col>
          <Col md={3}>
            <h2 className='footer-heading'>QUICK LINKS</h2>
            <Link to="/about">
              <p className='footer-link'><TbMathGreater /> About Us</p>
            </Link>

            <Link to="/services">
              <p className='footer-link'><TbMathGreater /> Services</p>
            </Link>

            <Link to="/projects">
              <p className='footer-link'><TbMathGreater /> Projects</p>
            </Link>

            <Link to="/blog">
              <p className='footer-link'><TbMathGreater /> Blogs</p>
            </Link>

            <Link to="/contact">
              <p className='footer-link'><TbMathGreater /> Contact Us</p>
            </Link>

          </Col>
          <Col md={3}>
            <h2 className='footer-heading'>OUR SERVICES</h2>
            <p className='footer-link'><TbMathGreater /> Accurate Measurements</p>
            <p className='footer-link'><TbMathGreater /> Solid Waste Removal</p>
            <p className='footer-link'><TbMathGreater /> Warranty Service</p>
            <p className='footer-link'><TbMathGreater /> Project Planning</p>
            <p className='footer-link'><TbMathGreater /> Constant Maintenance</p>
            <p className='footer-link'><TbMathGreater /> Qualified Specialists</p>
          </Col>
          <Col md={3}>
            <h2 className='footer-heading'>NEWSLETTER</h2>
            <input
              type="text"
              name=""
              className='footer-input'
              placeholder='Enter your Email Address'
            />
            <button className='footer-btn mt-3'>
              Get A Quote
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer