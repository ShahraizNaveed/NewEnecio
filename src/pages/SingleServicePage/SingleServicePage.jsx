import React from 'react'
import image from "../../assets/images/singleService/img.png"
import { Col, Container, Row } from 'react-bootstrap'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import "./SingleServicePage.css"
import { Link, useParams } from 'react-router-dom'

const SingleServicePage = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();

    const singleMap = {
        heading: "Accurate Measurements",
        imageURL: image,
        description: `Partner with a team that has the expertise, capabilities, safety record, and financial muscle to
        deliver as promised. From new construction to concrete renovation, Baker Gulf Coast Industrial
        offers full lifecycle support for every project. Our entire model is designed to mitigate our 
       clients' risk and maximize value. We tackle the most challenging projects on land, over water, or
        with limited access. We get it done right the first time. We specialize in the following solutions:`,
        detail: [
            {
                heading: "Civil Services",
                description: "BCGI provides a full scope of construction and related services, including site preparation, underground utilities, piles (subs), foundations, and site finishing. We self-perform industrial concrete design and installation.",
                pointsList: [
                    {
                        point: "Preconstruction",
                    },
                    {
                        point: "Project Management",
                    },
                    {
                        point: "Construction"
                    }
                ]
            },
            {
                heading: "Deep Foundation",
                description: "Aker's Deep Foundations A-team offers more than 100 combined years of experience in deep foundation design and execution..",
                pointsList: [
                    {
                        point: "ACIPICA Piles"
                    },
                    {
                        point: "Drilled Piles"
                    },
                    {
                        point: "Helical Piles / Micro Piles / Driving Piles"
                    },
                    {
                        point: "Retaining Structures"
                    },

                ]
            }
        ]

    }

    const services = [
        {
            id: 1,
            name: "Residential Shingle Roof",
        },
        {
            id: 2,
            name: "Standing Seam Metal",
        },
        {
            id: 3,
            name: "Build-up & Modified Bitumen",
        },
        {
            id: 4,
            name: "Building Information",
        },
        {
            id: 5,
            name: "Innovative Engineering",
        },
        {
            id: 6,
            name: "Architectural Composite Metal",
        },
    ]

    const name = services.find((item) => item.id == id);

    return (
        <>
            <CommonBanner title={name.name} />
            <section className='single-page-section'>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className='left-main-section'>
                                <img src={singleMap.imageURL} alt="Logo.3" className="img-fluid image" />
                                <p>{singleMap.description}</p>
                            </div>
                            {
                                singleMap.detail.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className='left-lower-section'>
                                                <h4>{item.heading}</h4>
                                                <p>{item.description}</p>
                                                <ul className='service-ul'>
                                                    {
                                                        item.pointsList.map((h, index) => {
                                                            return (
                                                                <>
                                                                    <li key={index}>{h.point}</li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={3}>
                            <div className='services-small-section'>
                                <div className='color-div'>
                                    <p>Services</p>
                                </div>
                                <div>
                                    <ul className='right-section-bullet'>
                                        {
                                            services.map((service) => {
                                                return (
                                                    <Link to={`/services/${service.id}`}>
                                                        <li>{service.name}</li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='get-a-quote'>
                                <Link to="/contact">
                                    <button>Get A Quote</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SingleServicePage