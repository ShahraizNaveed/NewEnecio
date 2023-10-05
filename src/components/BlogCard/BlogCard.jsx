import { useEffect, useState } from "react";
import "./BlogCard.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import image2 from "../../assets/images/blogPage/2.png";
import image3 from "../../assets/images/blogPage/3.png";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import Loader from "../../components/Loader/Loader";

const BlogCard = () => {
  const itemsPerPage = 3; // Number of items to show per page
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/api/Blogs/GetBlogs`).then((res) => {
      setLoading(true);
      // console.log(res.data);
      setBlogs(res.data);
      setLoading(false);
    });
  }, []);

  const handleLoadMore = () => {
    setDisplayedItems(displayedItems + itemsPerPage);
  };

  const images = {
    "Big purchase, Big Savings": image3,
    "Construction: A major Category of Heavy Equipment": image2,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="blog-card-section">
          <Container>
            <Row>
              {blogs.slice(0, displayedItems).map((item) => (
                <Col
                  md={4}
                  key={item.id}
                  className="d-flex justify-content-center"
                >
                  <Link to={`/blog/${item.id}`}>
                    <Card
                      key={item.id}
                      style={{ width: "18rem" }}
                      className="fade-in"
                    >
                      <div className="blog-image">
                        {/* <Card.Img variant="top" src={item.imagePath} /> */}
                        <Card.Img
                          variant="top"
                          src={images[item.title]}
                          className="card-image"
                        />
                        <p className="blog-date">
                          {dayjs(item.date).format("MM/DD/YYYY")}
                        </p>
                      </div>
                      <Card.Body>
                        <p className="role-comment d-flex align-items-center justify-content-center">
                          <FaUserAlt size={12} className="user-icon mx-2" />{" "}
                          {item.admin == true ? "admin" : "user"}
                          <span className="mx-3">|</span>
                          <BsFillChatFill size={12} className="user-icon" />
                          <span className="mx-1">{item.commentsCount}</span>
                          Comments
                        </p>
                        <Card.Title>
                          <span className="card-title mx-2">{item.title}</span>
                        </Card.Title>
                        <Card.Text>{item.description.slice(0, 50)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}

              <div className="text-center">
                {displayedItems < blogs.length && (
                  <button onClick={handleLoadMore} className="load-btn">
                    Load More
                  </button>
                )}
              </div>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default BlogCard;
