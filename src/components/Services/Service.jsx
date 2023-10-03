import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Service.css"
import image1 from "../../assets/images/services/construction.png"
import image2 from "../../assets/images/services/masonry.png"
import image3 from "../../assets/images/services/painting.png"
import image4 from "../../assets/images/services/plumber.png"
import image5 from "../../assets/images/services/roofing.png"
import image6 from "../../assets/images/services/architecture.png"
import innovate from "../../assets/images/services/innovate.png"
import create from "../../assets/images/services/create.png"
import deliver from "../../assets/images/services/deliver.png"

const services = [
    {
        id: 1,
        image: image1,
        name: "Construction"
    },
    {
        id: 2,
        image: image2,
        name: "Masonry"
    },
    {
        id: 3,
        image: image3,
        name: "Painting"
    },
    {
        id: 4,
        image: image4,
        name: "Plumbing"
    },
    {
        id: 5,
        image: image5,
        name: "Roofing"
    },
    {
        id: 6,
        image: image6,
        name: "Architecture"
    },
]

const Service = () => {
    return (
        <section className='service-section'>
            <Container>
                <Row>
                    <h1 className='text-center'>Our <span className='service-span'>Services</span></h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, iste.</p>
                    {services.map((item) => {
                        return (
                            <Col  key={item.id} md={2} sm={4} xs={6}>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='our-services d-flex justify-content-center align-items-center'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='img-fluid'
                                            />
                                        </div>
                                    </div>
                                    <div className='service-para'>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                    <div className='below-margin'>
                        <div className='mx-3 d-flex'>
                            <div>
                                <img
                                    src={innovate}
                                    alt="innovate"
                                    className='img-fluid'
                                />
                            </div>
                            <p className='mx-1'>Innovative</p>
                        </div>

                        <div className='mx-3 d-flex'>
                            <div>
                                <img
                                    src={create}
                                    alt="create"
                                    className='img-fluid'
                                />
                            </div>
                            <p className='mx-1'>Create</p>
                        </div>
                        <div className='mx-3 d-flex'>
                            <div>
                                <img
                                    src={deliver}
                                    alt="deliver"
                                    className='img-fluid'
                                />
                            </div>
                            <p className='mt-2 mx-1'>Deliver</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Service