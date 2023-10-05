import "./SingleBlogPage.css";
import { Link, useParams } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import icon1 from "../../assets/images/singleBlog/icon1.png";
import icon2 from "../../assets/images/singleBlog/icon2.png";
import { FiFacebook } from "react-icons/fi";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
} from "react-icons/bi";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import dayjs from "dayjs";
import Loader from "../../components/Loader/Loader";
import image2 from "../../assets/images/blogPage/2.png"
import image3 from "../../assets/images/blogPage/3.png"

const SingleBlogPage = () => {
  window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentComments, setRecentComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/Blogs/GetBlog/${blogId}`)
      .then((res) => {
        setLoading(true);
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      });

    axios
      .get(`${import.meta.env.VITE_URL}/api/Blogs/GetRecentBlogs`)
      .then((res) => {
        // console.log(res.data);
        setLoading(true);
        setRecentBlogs(res.data);
        setLoading(false);
      });

    axios
      .get(`${import.meta.env.VITE_URL}/api/Blogs/GetRecentComments`)
      .then((res) => {
        // console.log(res.data);
        setLoading(true);
        setRecentComments(res.data);
        setLoading(false);
      });
  }, [blogId]);

  const handleSubmit = () => {};

  const images = {
    "Big purchase, Big Savings" : image3,
    "Construction: A major Category of Heavy Equipment": image2,
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        data.map((blog) => {
          return (
            <>
              <CommonBanner title="Blog" />
              <section className="single-blog-section" key={blog.id}>
                <Container>
                  <Row>
                    <Col md={1}>
                      <div className="social-links-div">
                        <Link to="https://www.facebook.com/eneicomachines" target="_blank">
                          <p>
                              <BiLogoFacebook size={30} className="fb-icon" />
                          </p>
                        </Link>

                        {/* <Link to="/">
                          <p>
                            <BiLogoTwitter size={30} className="social-icon" />
                          </p>
                        </Link> */}

                        <Link to="https://www.linkedin.com/company/eneico" target="_blank">
                          <p>
                            <BiLogoLinkedin size={30} className="social-icon" />
                          </p>
                        </Link>

                        {/* <Link to="/">
                          <p>
                            <BiLogoPinterestAlt
                              size={30}
                              className="social-icon"
                            />
                          </p>
                        </Link> */}
                      </div>
                    </Col>

                    <Col md={6}>
                      <h1 className="single-blog-heading">{blog.title}</h1>
                      {/* <img src={blog.imagePath} alt="" className='img-fluid single-blog-image' /> */}
                      <img
                        src={images[blog.title]}
                        alt=""
                        className="img-fluid single-blog-image"
                      />
                      <p className="my-4">
                        <span className="date-span">
                          <img
                            src={icon1}
                            alt="icon"
                            className="img-fluid mx-2"
                          />
                          {dayjs(blog.date).format("MM/DD/YYYY")}
                        </span>

                        <span className="category-span mx-4">
                          <img
                            src={icon2}
                            alt="icon"
                            className="img-fluid mx-2"
                          />
                          Ideal Design
                        </span>
                      </p>

                      <p className="single-blog-desc">{blog.content}</p>

                      <div>
                        <p className="comment-heading">Leave A Comment</p>
                        <Form onSubmit={handleSubmit}>
                          <div>
                            <Row>
                              <Col>
                                <Form.Control
                                  required
                                  placeholder="First name"
                                  name="first_name"
                                />
                              </Col>
                              <Col>
                                <Form.Control
                                  required
                                  placeholder="Last name"
                                  name="last_name"
                                />
                              </Col>
                            </Row>
                          </div>

                          <div className="mt-4">
                            <FloatingLabel
                              controlId="floatingTextarea2"
                              label="Comments"
                            >
                              <Form.Control
                                name="comments"
                                as="textarea"
                                required
                                placeholder="Leave a comment here"
                                style={{ height: "100px" }}
                              />
                            </FloatingLabel>
                          </div>

                          <button type="submit" className="post-button">
                            POST COMMENT
                          </button>
                        </Form>
                      </div>

                      {/* <div>
                        {blog.comments.map((comment) => {
                          return (
                            <>
                              <p>{comment.email}</p>
                            </>
                          );
                        })}
                      </div> */}
                    </Col>

                    <Col md={1}></Col>

                    <Col md={4}>
                      <div className="blog-small-section">
                        <div className="first-div">
                          <p>Recent Posts</p>
                          <hr className="w-25 line" />
                          <ul className="right-section-blog">
                            {recentBlogs.map((blog) => {
                              return (
                                <Link key={blog.id} to={`/blog/${blog.id}`}>
                                  <li>{blog.title}</li>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="first-div mt-4">
                          <p>Recent Comments</p>
                          <hr className="w-25 line" />
                          <ul className="right-section-blog">
                            {recentComments.length === 0 ? (
                              <>
                                <div className="text-center">No Comments</div>
                              </>
                            ) : (
                              recentComments.map((comment) => {
                                return (
                                  <li key={comment.blogId}>
                                    <span className="role-span">
                                      {comment.admin === "true"
                                        ? "admin"
                                        : "user"}
                                    </span>
                                    on
                                    <Link to={`/blog/${comment.blogId}`}>
                                      <span className="blogTitle-span">
                                        {comment.title}
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })
                            )}
                          </ul>
                        </div>
                      </div>
                    </Col>
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

export default SingleBlogPage;
