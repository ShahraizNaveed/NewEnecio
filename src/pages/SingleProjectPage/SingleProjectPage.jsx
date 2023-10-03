import React, { useEffect, useState } from 'react'
import "./SingleProjectPage.css"
import { useParams } from 'react-router-dom'
import image1 from "../../assets/images/projectPage/1.png"
import image2 from "../../assets/images/projectPage/2.png"
import image3 from "../../assets/images/projectPage/3.png"
import image4 from "../../assets/images/projectPage/4.png"
import image5 from "../../assets/images/projectPage/5.png"
import image6 from "../../assets/images/projectPage/6.png"
import image7 from "../../assets/images/projectPage/7.png"
import image8 from "../../assets/images/projectPage/8.png"
import image9 from "../../assets/images/projectPage/9.png"
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi"
import axios from 'axios'
import dayjs from 'dayjs'
import Loader from '../../components/Loader/Loader'

const ProjectsData = [
    {
        id: 1,
        clientName: "John",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Construction Design",
        description: "Project",
        image: image1,
        role: "Tenant Improvement",
    },
    {
        id: 2,
        clientName: "Snow",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Construction Design",
        description: "Project",
        role: "Tenant Improvement",
        image: image2
    },
    {
        id: 3,
        clientName: "Harry Potter",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Construction Building",
        description: "Project",
        image: image2,
        role: "Tenant Improvement",
    },
    {
        id: 4,
        clientName: "John Wick",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Pink Office Decoration",
        description: "Project",
        image: image2,
        role: "Tenant Improvement",
    },
    {
        id: 5,
        clientName: "Iron Man",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Mirlando Construction",
        description: "Project",
        image: image2,
        role: "Tenant Improvement",
    },
    {
        id: 6,
        clientName: "Batman",
        projectSize: "394,000 SF",
        designArchitect: "Perkins + Will, Gensler",
        location: "Beverly Hills",
        date: "October 20, 2010",
        serviceType: "Mirlando Construction",
        description: "Project",
        image: image2,
        role: "Tenant Improvement",
    },
]

const SingleProjectPage = () => {
    window.scrollTo(0, 0);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/api/Projects/GetProject/${id}`)
            .then((res) => {
                setLoading(true);
                setProjects(res.data)
                setLoading(false);
            })
    }, [])

    // const data = ProjectsData.find((item) => item.id == id);
    // console.log(data);

    return (
        <>
            {
                loading ? <Loader /> : projects.map((project) => {
                    return (
                        <>
                            <CommonBanner title={project.projectName} />
                            <section className="single-project-section">
                                <Container>
                                    <Row>
                                        <Col md={3} className='border-style right-border'>
                                            <div className='p-4'>
                                                <p className='upper-para'>Client</p>
                                                <p className='lower-para'>{project.clientName}</p>
                                            </div>
                                        </Col>

                                        <Col md={3} className='border-style right-border'>
                                            <div className="p-4">
                                                <p className='upper-para'>Project Size</p>
                                                <p className='lower-para'>{project.projectSize}</p>
                                            </div>
                                        </Col>

                                        <Col md={3} className='border-style right-border'>
                                            <div className="p-4">
                                                <p className='upper-para'>Design Architect</p>
                                                <p className='lower-para'>{project.designArchitect}</p>
                                            </div>
                                        </Col>

                                        <Col md={3} className='border-style'>
                                            <div className="p-4">
                                                <p className='upper-para'>Location</p>
                                                <p className='lower-para'>{project.location}</p>
                                            </div>
                                        </Col>
                                        <Col md={12} className='border-style'>
                                            <div className="p-4 d-flex justify-content-between">
                                                <div>
                                                    <span className='left-span'>Date:</span>
                                                    <span className='right-span'>{dayjs(project.date).format("MM/DD/YYYY")} </span>
                                                </div>

                                                <div>
                                                    <span className='left-span left-margin'>Service:</span>
                                                    <span className='right-span'>{project.category}</span>
                                                </div>

                                                <div>
                                                    <span className='left-span'>SHARE ON:</span>
                                                    <span className='icons-span'>
                                                        <BiLogoFacebook size={17} className='mb-1' />
                                                        <BiLogoLinkedin size={17} className='mx-2 mb-1' />
                                                        <BiLogoTwitter scale={17} className='mb-1' />
                                                        <BiLogoYoutube scale={17} className='mx-2 mb-1' />
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>

                                        <div className='py-5'>
                                            <p>{project.content}</p>
                                        </div>

                                        <div>
                                            {/* <img src={project.headerImage} alt="Image" className='img-fluid' /> */}
                                            <img src={image4} alt="Image" className='img-fluid' />
                                        </div>
                                    </Row>
                                </Container>
                            </section>
                        </>
                    )
                })
            }


            {/* <CommonBanner title={data.clientName} />
            <section className="single-project-section">
                <Container>
                    <Row>
                        <Col md={3} className='border-style right-border'>
                            <div className='p-4'>
                                <p className='upper-para'>Client</p>
                                <p className='lower-para'>{data.clientName}</p>
                            </div>
                        </Col>

                        <Col md={3} className='border-style right-border'>
                            <div className="p-4">
                                <p className='upper-para'>Project Size</p>
                                <p className='lower-para'>{data.projectSize}</p>
                            </div>
                        </Col>

                        <Col md={3} className='border-style right-border'>
                            <div className="p-4">
                                <p className='upper-para'>Design Architect</p>
                                <p className='lower-para'>{data.designArchitect}</p>
                            </div>
                        </Col>

                        <Col md={3} className='border-style'>
                            <div className="p-4">
                                <p className='upper-para'>Location</p>
                                <p className='lower-para'>{data.location}</p>
                            </div>
                        </Col>
                        <Col md={12} className='border-style'>
                            <div className="p-4 d-flex justify-content-between">
                                <div>
                                    <span className='left-span'>Date:</span>
                                    <span className='right-span'>{data.date}</span>
                                </div>

                                <div>
                                    <span className='left-span left-margin'>Service:</span>
                                    <span className='right-span'>{data.serviceType}</span>
                                </div>

                                <div>
                                    <span className='left-span'>SHARE ON:</span>
                                    <span className='icons-span'>
                                        <BiLogoFacebook size={17} className='mb-1' />
                                        <BiLogoLinkedin size={17} className='mx-2 mb-1' />
                                        <BiLogoTwitter scale={17} className='mb-1' />
                                        <BiLogoYoutube scale={17} className='mx-2 mb-1' />
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <div className='py-5'>
                            <p>{data.description}</p>
                        </div>

                        <div>
                            <img src={data.image} alt="Image" className='img-fluid' />
                        </div>
                    </Row>
                </Container>
            </section> */}

        </>
    )
}

export default SingleProjectPage