import "./HotSellingProducts.css";
import { Col, Container, Row } from "react-bootstrap";
import produc from "../../assets/images/productPage/hotSelling/product1.png";
import image1 from "../../assets/images/productPage/hotSelling/product1.png";
import image2 from "../../assets/images/productPage/hotSelling/2.png";
import image3 from "../../assets/images/productPage/hotSelling/3.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const HotSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Products/HotSellingProducts`)
      .then((res) => {
        // console.log(res.data);
        setLoading(true);
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  const images = {
    "Concrete Batching Plant": image1,
    "Mobile Concrete Pump": image2,
    "Concrete Paver Machine": image3,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container fluid>
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/Mp8IXI1kzvQ?si=Dc5MCOzT-1u2uMqH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Container>

          <section className="products-section">
            <h1 className="d-flex justify-content-center selling-heading">
              Our Hotselling Products
            </h1>

            <Container>
              <Row>
                {products.map((prod, index) => (
                  <div key={index}>
                    <Row
                      style={{ direction: index % 2 === 0 ? "ltr" : "rtl" }}
                      className={index % 2 == 0 ? "ltr" : "rtl"}
                    >
                      <Col md={6} className="">
                        <div className="product-details">
                          <Link to={`/product/${prod.id}`}>
                            <h5>{prod.productModel}</h5>
                          </Link>

                          <Link to={`/product/${prod.id}`}>
                            <h4>{prod.productName}</h4>
                          </Link>

                          <p>{prod.productDescription}</p>

                          <div className="product-btn">
                            <Link to={`/product/${prod.id}`}>
                              <button className="first">Request A Quote</button>
                            </Link>
                            <Link to={`/product/${prod.id}`}>
                              <button className="second mx-3">
                                Learn More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="hot-product text-center">
                          <Link to={`/product/${prod.id}`}>
                            {/* <img
                          src={prod.productImage}
                          alt=""
                          className="img-fluid"
                        /> */}
                            <img
                              src={images[prod.productName]}
                              alt=""
                              className="img-fluid selling-images"
                            />
                          </Link>

                          <div className="hot-product-absolute">
                            <div>
                              <span className="typography-product-span">
                                {prod.purchases}
                              </span>
                              <p className="typography-product-p">Purchases</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default HotSellingProducts;
