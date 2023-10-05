import { useEffect, useState } from "react";
import "./ProductCategories.css";
import { Col, Container, Row } from "react-bootstrap";
import product1 from "../../assets/images/productPage/products/machineColor1.png";
import product2 from "../../assets/images/productPage/products/machineColor2.png";
import product3 from "../../assets/images/productPage/products/machineColor3.png";
import product4 from "../../assets/images/productPage/products/machineColor4.png";
import product5 from "../../assets/images/productPage/products/machineColor5.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const ProductCategories = () => {
  // window.scrollTo(0, 0);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Products/ProductCategory`)
      .then((res) => {
        // console.log(res.data);
        setLoading(true);
        setCategory(res.data);
        setLoading(false);
      });
  }, []);

  const images = {
    "Road Machinery": product1,
    "Concrete Machinery": product5,
    "Asphalt Machinery": product2,
    "Crushing Machinery": product3,
    "Earth Moving Machinery": product4,
    "Building Machinery": product2,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="productCategory-section">
          <Container>
            <Row>
              {category.map((item, index) => (
                <>
                  <Col md={2} className="category-col" key={index}>
                    <Link
                      to={`/products/${item.id}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="category-div">
                        {/* <img src={item.inActiveImage} alt="" className='img-fluid' /> */}
                        <img
                          src={images[item.name]}
                          alt=""
                          className="img-fluid category-images"
                        />
                        <p className="text-center my-3 black">{item.name}</p>
                      </div>
                    </Link>
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default ProductCategories;
