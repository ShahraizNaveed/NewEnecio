import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row } from "react-bootstrap";
import "./ProjectsSlider.css";
import image1 from "../../assets/images/projects/project1.png";
import image2 from "../../assets/images/projects/project2.png";
import image3 from "../../assets/images/projects/project3.png";
import image4 from "../../assets/images/projects/project4.png";
import image5 from "../../assets/images/projects/project5.png";
import image6 from "../../assets/images/projects/project6.png";
import axios from "axios";

const ProjectsSlider = () => {
  const [projects, setProjects] = useState([]);

  const ProjectsData = [
    {
      id: 1,
      titile: "buildings",
      image: image1,
    },
    {
      id: 2,
      titile: "Extra Projects",
      image: image2,
    },
    {
      id: 3,
      titile: "Extra Projects",
      image: image3,
    },
    {
      id: 4,
      titile: "buildings",
      image: image4,
    },
    {
      id: 5,
      titile: "houses",
      image: image5,
    },
    {
      id: 6,
      titile: "Extra Projects",
      image: image6,
    },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Home/GetProjects`)
      .then((res) => {
        setProjects(res.data);
      });
  }, []);

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="projects-slider-section">
      <Container>
        <Row>
          <h1 className="text-center">
            Our Company <span className="projects-span">Projects</span>
          </h1>

          <Slider {...settings}>
            {ProjectsData.map((item) => {
              return (
                <>
                  <div className="card projects-card">
                    <img src={item.image} alt="projects" className="img-fluid my-5" />
                  </div>
                </>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSlider;
