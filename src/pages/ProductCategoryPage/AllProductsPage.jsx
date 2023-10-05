import "./AllProductsPage.css";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import Service from "../../components/Services/Service";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import hero from "../../assets/images/productPage/hero.png";
import image from "../../assets/images/productPage/reach-stacker.png";
import asphaltPaver from "../../assets/images/productPage/asphaltpaver.png";
import asphaltbatching from "../../assets/images/productPage/asphaltbatching.png";
import transitmixer from "../../assets/images/productPage/transitmixer.png";
import concretepaver from "../../assets/images/productPage/concretepaver.png";
import stationaryconcretepump from "../../assets/images/productPage/stationaryconcretepump.png";
import mobileconcretepump from "../../assets/images/productPage/mobileconcretepump.png";
import concretepump from "../../assets/images/productPage/concretepump.png";
import batchingplant from "../../assets/images/productPage/batchingplant.png";
import cementscrew from "../../assets/images/productPage/cementscrew.png";
import reversableplate from "../../assets/images/productPage/reversableplate.png";
import generator from "../../assets/images/productPage/generator.png";
import steeelbarcutter from "../../assets/images/productPage/steeelbarcutter.png";
import bendingmachine from "../../assets/images/productPage/bendingmachine.png";
import laserconcretescreed from "../../assets/images/productPage/laserconcretescreed.png";
import excavator from "../../assets/images/productPage/excavator.png";
import wheelloader from "../../assets/images/productPage/wheelloader.png";
import tandomrollers from "../../assets/images/productPage/tandomrollers.png";
import towercrane from "../../assets/images/productPage/towercrane.png";
import silo from "../../assets/images/productPage/silo.png";
import roadroller from "../../assets/images/productPage/roadroller.png";
import vibrator from "../../assets/images/productPage/vibrator.png";

import { useEffect, useState } from "react";
import ProductCategories from "../../components/ProductCategories/productCategories";
import filter from "../../assets/images/productPage/slider.png";
import reset from "../../assets/images/productPage/reset.png";
import { TbMathGreater } from "react-icons/tb";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const products = [
  {
    id: 1,
    productName: "Test",
    productCategory: "Machine1",
    productImage: image,
    above40: true,
    productModels: [
      {
        id: 1,
        name: "SRSC1009-6E",
      },
    ],
    liftingHeight: "100",
    loadingCapacity: "100",
    wheelBase: "100",
  },
  {
    id: 2,
    productName: "Dummmy",
    productCategory: "Machine1",
    productImage: image,
    above40: false,
    productModels: [
      {
        id: 1,
        name: "SRSC1009-6E",
      },
    ],
    liftingHeight: "100",
    loadingCapacity: "100",
    wheelBase: "100",
  },
  {
    id: 3,
    productName: "Hello",
    productCategory: "Machine1",
    productImage: image,
    above40: true,
    productModels: [
      {
        id: 1,
        name: "SRSC1009-6E",
      },
    ],
    liftingHeight: "100",
    loadingCapacity: "100",
    wheelBase: "100",
  },
  {
    id: 4,
    productName: "World",
    productCategory: "Machine1",
    productImage: image,
    above40: false,
    productModels: [
      {
        id: 1,
        name: "Test",
      },
    ],
    liftingHeight: "100",
    loadingCapacity: "100",
    wheelBase: "100",
  },
];

const AllProductsPage = () => {
  // window.scrollTo(0, 0);
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState();
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Products/CategorizedProducts/${id}`)
      .then((res) => {
        // console.log(res.data);
        setLoading(true);
        setCategorizedProducts(res.data);
        setLoading(false);
      });

    axios
      .get(`${import.meta.env.VITE_URL}/api/Products/ProductCategory`)
      .then((res) => {
        setLoading(true);
        setCategory(res.data);
        setLoading(false);
      });
  }, [id]);

  const data = category?.find((item) => item.id == id);

  const images = {
    "Asphalt Paver Machine": asphaltPaver,
    "Asphalt Batching Plants": asphaltbatching,
    "Concrete Transit Mixer": transitmixer,
    "Concrete Paver Machine": concretepaver,
    "Stationary Concrete Pump": stationaryconcretepump,
    "Mobile Concrete Pump": mobileconcretepump,
    "Concrete Pumps": concretepump,
    "Concrete Batching Plant": batchingplant,
    "Cement Screw": cementscrew,
    "Reversible Plate Compactor": reversableplate,
    Generators: generator,
    "Steel bar Cutter": steeelbarcutter,
    "Bending Machine": bendingmachine,
    "Laser Concrete Screed": laserconcretescreed,
    "Road Rollers": roadroller,
    Excavators: excavator,
    "Wheel Loader": wheelloader,
    Vibrators: vibrator,
    "Tandem rollers (PTRs)": tandomrollers,
    "Tower Crane": towercrane,
    Silo: silo,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CommonBanner title="Our Products" />
          {/* BreadCrumb  */}
          <section>
            <Container>
              <div className="bread-crumb">
                <p>
                  <Link to="/products">Product</Link>
                  <span className="mx-3">
                    <TbMathGreater />
                  </span>
                  {data?.name}
                </p>
              </div>
            </Container>
          </section>

          {/* Hero Image */}
          <section>
            <img src={hero} alt="" className="img-fluid hero-image" />
          </section>

          {/* Category Section  */}
          <section>
            <ProductCategories />
          </section>

          {/* All products  */}
          <section className="all-products-section">
            <Container>
              <Row>
                {categorizedProducts.length === 0 ? (
                  <>
                    <div className="conatiner">
                      <div
                        className="text-center my-5"
                        style={{ height: "200px", fontSize: "30px" }}
                      >
                        No Product Available
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Col md={3}>
                      <section className="filter-section">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img src={filter} alt="" className="img-fluid" />
                            <span>Filter By</span>
                          </div>

                          <div>
                            <img src={reset} alt="" className="img-fluid" />
                            <span>Reset</span>
                          </div>
                        </div>
                      </section>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={8}>
                      <Form className="">
                        <InputGroup className="">
                          <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Product Name"
                            className="search-field"
                          />
                        </InputGroup>
                      </Form>

                      {categorizedProducts
                        ?.filter((item) => {
                          return search.toLowerCase() === ""
                            ? item
                            : item.productName.toLowerCase().includes(search);
                        })
                        .map((item) => {
                          return (
                            <>
                              <div
                                className="my-5 main-product-div"
                                key={item.id}
                              >
                                {/* <p className="prod-name yellow">
                        {item.above40 ? "Above 40T" : "Below 40T"}
                      </p> */}

                                <Link to={`/product/${item.productId}`}>
                                  <p className="prod-name black margin-negative">
                                    {item.productName}
                                  </p>
                                </Link>

                                <Row>
                                  <Col md={6}>
                                    <Link to={`/product/${item.productId}`}>
                                      {/* <img
                              src={item.headerImage}
                              alt=""
                              className="img-fluid product-center-image"
                            /> */}

                                      <img
                                        src={images[item.productName]}
                                        alt=""
                                        className="img-fluid product-center-image"
                                      />
                                    </Link>
                                  </Col>
                                  <Col md={6}>
                                    <h4 className="prod-title">
                                      <span className="yellow">Machine</span>{" "}
                                      Details
                                    </h4>

                                    <div className="prod-sepcs">
                                      <p>
                                        Max Lifting Height:{" "}
                                        {/* <span>{item.liftingHeight}</span> */}
                                      </p>
                                      <p>
                                        Max Loading Capacity:{" "}
                                        {/* <span>{item.loadingCapacity}</span> */}
                                      </p>
                                      <p>
                                        {/* Wheel Base: <span>{item.wheelBase}</span> */}
                                      </p>
                                      <p>Models :</p>
                                      {item?.productModel?.map((model) => {
                                        return (
                                          <>
                                            <p
                                              key={model.id}
                                              className="model-para"
                                            >
                                              {model} <TbMathGreater />
                                            </p>
                                          </>
                                        );
                                      })}
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </>
                          );
                        })}
                    </Col>
                  </>
                )}
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default AllProductsPage;
