import { useEffect, useState } from "react";
import "./ProductCategories.css";
import { Col, Container, Row } from "react-bootstrap";
import product1 from "../../assets/images/productPage/products/machine1.png";
import { Link } from "react-router-dom";
import axios from "axios";

// const category = [
//     {
//         id: 1,
//         category: "Machine1",
//         image: product1
//     },
//     {
//         id: 2,
//         category: "Machine2",
//         image: product1
//     },
//     {
//         id: 3,
//         category: "Machine3",
//         image: product1
//     },
//     {
//         id: 4,
//         category: "Machine4",
//         image: product1
//     },
// ]

const ProductCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Products/ProductCategory`)
      .then((res) => {
        // console.log(res.data);
        setCategory(res.data);
      });
  }, []);

  return (
    <section className="productCategory-section">
      <Container>
        <Row>
          {category.map((item) => (
            <>
              <Col md={3} className="category-col">
                <Link to={`/products/${item.name}`} className="d-flex justify-content-center align-items-center">
                  <div>
                    {/* <img src={item.inActiveImage} alt="" className='img-fluid' /> */}
                    <img src={product1} alt="" className="img-fluid" />
                    <p className="text-center my-3 black">{item.name}</p>
                  </div>
                </Link>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCategories;
