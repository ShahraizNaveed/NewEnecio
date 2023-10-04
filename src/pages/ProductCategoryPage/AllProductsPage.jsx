import "./AllProductsPage.css"
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import Service from '../../components/Services/Service';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import hero from "../../assets/images/productPage/hero.png"
import image from "../../assets/images/productPage/reach-stacker.png"
import { useState } from 'react';
import ProductCategories from '../../components/ProductCategories/productCategories';
import filter from "../../assets/images/productPage/slider.png"
import reset from "../../assets/images/productPage/reset.png"
import { TbMathGreater } from "react-icons/tb"


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
      }
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
      }
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
      }
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
      }
    ],
    liftingHeight: "100",
    loadingCapacity: "100",
    wheelBase: "100",
  },
]

const AllProductsPage = () => {
  // window.scrollTo(0, 0);
  const { category } = useParams();
  const [search, setSearch] = useState("");

  return (
    <>
      <CommonBanner title="Our Products" />

      {/* BreadCrumb  */}
      <section>
        <Container>
          <div className='bread-crumb'>
            <p>
              <Link to="/products">
                Product
              </Link>
              <span className='mx-3'><TbMathGreater /></span>
              {category}
            </p>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section>
        <img src={hero} alt="" className='img-fluid hero-image' />
      </section>

      {/* Category Section  */}
      <section>
        <ProductCategories />
      </section>

      {/* All products  */}
      <section>
        <Container>
          <Row>
            <Col md={3}>
              <section className='filter-section'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <img src={filter} alt="" className='img-fluid' />
                    <span>Filter By</span>
                  </div>

                  <div>
                    <img src={reset} alt="" className='img-fluid' />
                    <span>Reset</span>
                  </div>
                </div>
              </section>
            </Col>
            <Col md={1}></Col>

            <Col md={8}>

              <Form className=''>
                <InputGroup className=''>
                  <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Product Name'
                    className='search-field'
                  />
                </InputGroup>
              </Form>

              {
                products?.filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.productName.toLowerCase().includes(search)
                }).map((item) => {
                  return (
                    <>
                      <div className='my-5 main-product-div' key={item.id}>
                        <p className='prod-name yellow'>{item.above40 ? "Above 40T" : "Below 40T"}</p>

                        <Link to={`/products/${item.productCategory}/${item.id}`}>
                          <p className='prod-name black margin-negative'>{item.productName}</p>
                        </Link>

                        <Row>
                          <Col md={6}>
                            <Link to={`/products/${item.productCategory}/${item.id}`}>
                              <img src={item.productImage} alt="" className='img-fluid product-center-image' />
                            </Link>
                          </Col>
                          <Col md={6}>
                            <h4 className='prod-title'><span className='yellow'>Machine</span> Details</h4>

                            <div className='prod-sepcs'>
                              <p>Max Lifting Height: <span>{item.liftingHeight}</span></p>
                              <p>Max Loading Capacity: <span>{item.loadingCapacity}</span></p>
                              <p>Wheel Base: <span>{item.wheelBase}</span></p>
                              <p>Models :</p>
                              {
                                item?.productModels?.map((model) => {
                                  return (
                                    <>
                                      <p key={model.id} className='model-para'>
                                        {model.name} <TbMathGreater />
                                      </p>
                                    </>
                                  )
                                })
                              }
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  )
                })
              }
            </Col>
          </Row>
        </Container>
      </section>

      <Service />
    </>
  )
}

export default AllProductsPage