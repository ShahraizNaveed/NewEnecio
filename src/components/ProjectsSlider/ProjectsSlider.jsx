import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';
import "./ProjectsSlider.css"
import image1 from "../../assets/images/projectPage/1.png"
import image2 from "../../assets/images/projectPage/2.png"
import image3 from "../../assets/images/projectPage/3.png"
import image4 from "../../assets/images/projectPage/4.png"
import image5 from "../../assets/images/projectPage/5.png"
import image6 from "../../assets/images/projectPage/6.png"
import image7 from "../../assets/images/projectPage/7.png"
import image8 from "../../assets/images/projectPage/8.png"
import image9 from "../../assets/images/projectPage/9.png"
import axios from 'axios';

const ProjectsSlider = () => {
    const [projects, setProjects] = useState([]);

    const ProjectsData = [
        {
            id: 1,
            titile: "buildings",
            image: image1
        },
        {
            id: 2,
            titile: "Extra Projects",
            image: image2
        },
        {
            id: 3,
            titile: "Extra Projects",
            image: image3
        },
        {
            id: 4,
            titile: "buildings",
            image: image4
        },
        {
            id: 5,
            titile: "houses",
            image: image5
        },
        {
            id: 6,
            titile: "Extra Projects",
            image: image6
        },
        {
            id: 7,
            titile: "Interior",
            image: image7
        },
        {
            id: 8,
            titile: "houses",
            image: image8
        },
        {
            id: 9,
            titile: "Offices",
            image: image9
        },
    ]


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/api/Home/GetProjects`)
            .then((res) => {
                setProjects(res.data)
            })

    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='projects-slider-section'>
            <Container>
                <Row>
                    <h1 className='text-center'>Our Company <span className='projects-span'>Projects</span></h1>
                    <p className='text-center'>South-Central construction region since 2005 </p>

                    {/* <Slider {...settings} className='mt-5'>
                        {
                            projects.map((item) =>
                                <div key={item.id} className="">
                                    <img className='img-fluid' src={item.imagePath} />
                                    <p>{item.clientName}</p>
                                </div>
                            )
                        }
                    </Slider> */}

                    <Slider {...settings} className='mt-5'>
                        {
                            ProjectsData.map((item) =>
                                <div key={item.id} className="">
                                    <img className='img-fluid' src={item.image} />
                                </div>
                            )
                        }
                    </Slider>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectsSlider