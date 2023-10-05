import { useEffect, useState } from "react";
import "./FilterProjects.css";
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
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const FilterProjects = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [projetcs, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState("All");

  const images = {
    "PATRIND HYDRO POWER PROJECT": patrindHydroPowerImage,
    "BAHRIA TOWN KARACHI": bahriaTownKarachiImage,
    "HYDRO POWER SWAT": hydroPowerSwatImage,
    "SCHOOL BUILDING": schoolBuildingImage,
    "CPEC": cpecImage,
    "RATHOA-HARYAM BRIDGE PROJECT": rathoaHaryamBridgeImage,
    "APS School Building": apsSchool,
    "ELECTRIC POWER HOUSE PROJECT": electricPower,
    "CANAL DIVERSION PROJECT": canalDiversion,
    "DHA LAHORE": dhaLahore,
    "Gulberg Islamabad": gulberg,
    "PKLI HOSPITAL DHA": palkiHospital,
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Projects/GetProjects`)
      .then((res) => {
        setLoading(true);
        // console.log(res.data);
        setProjects(res.data);
        setData(res.data);
        setCollection([...new Set(res.data.map((item) => item.category))]);
        setLoading(false);
      });
  }, []);

  const projects_filter = (itemData) => {
    const filterData = projetcs.filter((item) => item.category == itemData);
    setData(filterData);
    setSelectedItem(itemData);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="filter-projects-section">
          <Container>
            <Row>
              <div className="filterItem">
                <ul>
                  <li>
                    <button
                      className={selectedItem === "All" ? "active" : ""}
                      onClick={() => {
                        projects_filter("All");
                        setData(projetcs);
                      }}
                    >
                      All
                    </button>
                  </li>
                  {collection.map((item) => (
                    <li key={item}>
                      <button
                        className={selectedItem === item ? "active" : ""}
                        onClick={() => {
                          projects_filter(item);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {data.map((item) => (
                <Col md={4} key={item.id} className="galleryItem fade-in">
                  <Link to={`/projects/${item.id}`}>
                    <div>
                      {/* <img src={item.headerImage} className='img-fluid' /> */}
                      <img src={images[item.name]} className="img-fluid" />
                      <p className="service-name">{item.name}</p>
                      <p className="our-role">
                        Our Role: <span>{item.ourRole}</span>
                      </p>
                    </div>
                  </Link>
                </Col>
              ))}

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
      )}
    </>
  );
};

export default FilterProjects;
