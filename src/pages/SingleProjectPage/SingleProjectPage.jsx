import { useEffect, useState } from "react";
import "./SingleProjectPage.css";
import { useParams } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { Col, Container, Row } from "react-bootstrap";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import axios from "axios";
import dayjs from "dayjs";
import Loader from "../../components/Loader/Loader";
import patrindHydroPowerImage from "../../assets/images/projects/projects/1.png";
import bahriaTownKarachiImage from "../../assets/images/projects/projects/2.png";
import hydroPowerSwatImage from "../../assets/images/projects/projects/hydroPowerSwatImage.png";
import schoolBuildingImage from "../../assets/images/projects/projects/schoolBuildingImage.png";
import cpecImage from "../../assets/images/projects/projects/cpecImage.png";
import rathoaHaryamBridgeImage from "../../assets/images/projects/projects/rathoaHaryamBridgeImage.png";
import apsSchool from "../../assets/images/projects/projects/apsSchool.png";
import electricPower from "../../assets/images/projects/projects/electricPower.png";
import canalDiversion from "../../assets/images/projects/projects/canalDiversion.png";
import dhaLahore from "../../assets/images/projects/projects/dhaLahore.png";
import gulberg from "../../assets/images/projects/projects/gulberg.png";
import palkiHospital from "../../assets/images/projects/projects/palkiHospital.png";

const SingleProjectPage = () => {
  window.scrollTo(0, 0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Projects/GetProject/${id}`)
      .then((res) => {
        setLoading(true);
        // console.log(res.data);
        setProjects(res.data);
        setLoading(false);
      });
  }, []);

  // const data = ProjectsData.find((item) => item.id == id);
  // console.log(data);

  const images = {
    "PATRIND HYDRO POWER PROJECT": patrindHydroPowerImage,
    "BAHRIA TOWN KARACHI": bahriaTownKarachiImage,
    "HYDRO POWER SWAT": hydroPowerSwatImage,
    "SCHOOL BUILDING": schoolBuildingImage,
    CPEC: cpecImage,
    "RATHOA-HARYAM BRIDGE PROJECT": rathoaHaryamBridgeImage,
    "APS School Building": apsSchool,
    "ELECTRIC POWER HOUSE PROJECT": electricPower,
    "CANAL DIVERSION PROJECT": canalDiversion,
    "DHA LAHORE": dhaLahore,
    "Gulberg Islamabad": gulberg,
    "PKLI HOSPITAL DHA": palkiHospital,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        projects.map((project) => {
          return (
            <>
              <CommonBanner title={project.projectName} />
              <section className="single-project-section">
                <Container>
                  <Row>
                    <Col md={3} className="border-style right-border">
                      <div className="p-4">
                        <p className="upper-para">Client</p>
                        <p className="lower-para">{project.clientName}</p>
                      </div>
                    </Col>

                    <Col md={3} className="border-style right-border">
                      <div className="p-4">
                        <p className="upper-para">Project Size</p>
                        <p className="lower-para">{project.projectSize}</p>
                      </div>
                    </Col>

                    <Col md={3} className="border-style right-border">
                      <div className="p-4">
                        <p className="upper-para">Design Architect</p>
                        <p className="lower-para">{project.designArchitect}</p>
                      </div>
                    </Col>

                    <Col md={3} className="border-style">
                      <div className="p-4">
                        <p className="upper-para">Location</p>
                        <p className="lower-para">{project.location}</p>
                      </div>
                    </Col>
                    <Col md={12} className="border-style">
                      <div className="p-4 d-flex justify-content-between">
                        <div>
                          <span className="left-span">Date:</span>
                          <span className="right-span">
                            {dayjs(project.date).format("MM/DD/YYYY")}{" "}
                          </span>
                        </div>

                        <div>
                          <span className="left-span left-margin">
                            Service:
                          </span>
                          <span className="right-span">{project.category}</span>
                        </div>

                        <div>
                          <span className="left-span">SHARE ON:</span>
                          <span className="icons-span">
                            <BiLogoFacebook size={17} className="mb-1" />
                            <BiLogoLinkedin size={17} className="mx-2 mb-1" />
                            <BiLogoTwitter scale={17} className="mb-1" />
                            <BiLogoYoutube scale={17} className="mx-2 mb-1" />
                          </span>
                        </div>
                      </div>
                    </Col>

                    <div className="d-flex justify-content-center my-5">
                      {/* <img src={project.headerImage} alt="Image" className='img-fluid' /> */}
                      <img src={images[project.projectName]} alt="Image" className="img-fluid" />
                    </div>

                    <div className="py-5">
                      <p>{project.content}</p>
                    </div>

                  
                  </Row>
                </Container>
              </section>
            </>
          );
        })
      )}
    </>
  );
};

export default SingleProjectPage;
