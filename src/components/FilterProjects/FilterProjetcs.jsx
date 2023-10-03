import React from 'react'
import { useEffect, useState } from "react";
import "./FilterProjects.css"
import image1 from "../../assets/images/projectPage/1.png"
import image2 from "../../assets/images/projectPage/2.png"
import image3 from "../../assets/images/projectPage/3.png"
import image4 from "../../assets/images/projectPage/4.png"
import image5 from "../../assets/images/projectPage/5.png"
import image6 from "../../assets/images/projectPage/6.png"
import image7 from "../../assets/images/projectPage/7.png"
import image8 from "../../assets/images/projectPage/8.png"
import image9 from "../../assets/images/projectPage/9.png"
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from "../../components/Loader/Loader"

const FilterProjects = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    const [projetcs, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const ProjectsData = [
        {
            id: 1,
            titile: "buildings",
            image: image1,
            role: "Tenant Improvement",
            service: "Construction Design"
        },
        {
            id: 2,
            titile: "Extra Projects",
            image: image2,
            role: "Tenant Improvement",
            service: "Construction Design"
        },
        {
            id: 3,
            titile: "Extra Projects",
            image: image3,
            role: "Tenant Improvement",
            service: "Construction Building"
        },
        {
            id: 4,
            titile: "buildings",
            image: image4,
            role: "Tenant Improvement",
            service: "Pink Office Decoration"
        },
        {
            id: 5,
            titile: "houses",
            image: image5,
            role: "Tenant Improvement",
            service: "Mirlando Constructions"
        },
        {
            id: 6,
            titile: "Interior",
            image: image6,
            role: "Tenant Improvement",
            service: "Mirlando Constructions"
        },
        // {
        //     id: 7,
        //     titile: "Interior",
        //     image: image7,
        //     role: "Tenant Improvement"
        // },
        // {
        //     id: 8,
        //     titile: "houses",
        //     image: image8,
        //     role: "Tenant Improvement"
        // },
        // {
        //     id: 9,
        //     titile: "Offices",
        //     image: image9,
        //     role: "Tenant Improvement"
        // },
    ]


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/api/Projects/GetProjects`)
            .then((res) => {
                setLoading(true);
                setProjects(res.data)
                setData(res.data);
                setCollection([... new Set(res.data.map((item) => item.category))])
                setLoading(false);
            })
    }, [])

    const projects_filter = (itemData) => {
        const filterData = projetcs.filter((item) => item.category == itemData);
        setData(filterData);
    }

    return (
        <>
            {
                loading ? <Loader /> : <section className='filter-projects-section'>
                    <Container>
                        <Row>
                            <div className="filterItem">
                                <ul>
                                    <li><button onClick={() => setData(projetcs)}>All</button></li>
                                    {
                                        collection.map((item) => <li key={item}><button onClick={() => { projects_filter(item) }}>{item}</button></li>)
                                    }
                                </ul>
                            </div>
                            {
                                data.map((item) =>
                                    <Col md={4} key={item.id} className="galleryItem fade-in">
                                        <Link to={`/projects/${item.id}`}>
                                            <div>
                                                {/* <img src={item.headerImage} className='img-fluid' /> */}
                                                <img src={image4} className='img-fluid' />
                                                <p className='service-name'>{item.name}</p>
                                                <p className='our-role'>Our Role: <span>{item.ourRole}</span></p>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            }


                            {/* {
                    ProjectsData.map((item) =>
                        <Col md={4} key={item.id} className="galleryItem fade-in">
                            <Link to={`/projects/${item.id}`}>
                                <div>
                                    <img src={item.image} />
                                    <p className='service-name'>{item.titile}</p>
                                    <p className='our-role'>Our Role: <span>{item.service}</span></p>
                                </div>
                            </Link>
                        </Col>
                    )
                } */}
                        </Row>
                    </Container>
                </section>
            }
        </>
    )
}

export default FilterProjects