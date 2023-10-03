import React, { useEffect, useState } from 'react'
import "./Clients.css"
import Marquee from 'react-fast-marquee';
import image1 from "../../assets/images/clients/one.png"
import image2 from "../../assets/images/clients/two.png"
import image3 from "../../assets/images/clients/three.png"
import image4 from "../../assets/images/clients/four.png"
import image5 from "../../assets/images/clients/five.png"
import image6 from "../../assets/images/clients/six.png"
import image7 from "../../assets/images/clients/seven.png"
import image8 from "../../assets/images/clients/eight.png"
import image9 from "../../assets/images/clients/nine.png"
import logo from "../../assets/images/about/client.png"
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const brands = [
  {
    id: 1,
    image: image1
  },
  {
    id: 2,
    image: image2
  },
  {
    id: 3,
    image: image3
  },
  {
    id: 4,
    image: image4
  },
  {
    id: 5,
    image: image5
  },
  {
    id: 6,
    image: image6
  },
  {
    id: 7,
    image: image7
  },
  {
    id: 8,
    image: image8
  },
  {
    id: 9,
    image: image9
  }
]


const Clients = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/api/Home/GetClients`)
      .then((res) => {
        console.log(res.data);
        setClients(res.data)
      })
  }, [])

  return (
    <section className="clients-section">
      <Container>
        <Row>
          {
            props.hide == "false" && <h1 className='text-center title'>Our <span className='service-span'>Clients</span></h1>
          }

          {
            props.hide == "true" &&
            <>
              <Col md={6}>
                <div className='d-flex about-client-section'>
                  <div>
                    <img src={logo} alt="" className='img-fluid' />
                  </div>
                  <div>
                    <h1 className='mx-4'>
                      We Have Best
                      <br />
                      Corporate Partners
                    </h1>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <h6>We work with the public sector to build thriving communities</h6>
              </Col>
            </>
          }

          <Marquee speed={100}>
            {/* {
              clients.map((item) => {
                return (
                  <div key={item.id} className="image_wrapper">
                    <img src={item.imagePath} alt="" className='img-fluid' />
                  </div>
                )
              })
            } */}

            {
              brands.map((item) => {
                return (
                  <div key={item.id} className="image_wrapper">
                    <img src={item.image} alt="" className='img-fluid' />
                  </div>
                )
              })
            }
          </Marquee>
        </Row>
      </Container>
    </section>
  )
}

export default Clients