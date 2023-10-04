import "./SingleBlogPage.css"
import { Link, useParams } from 'react-router-dom';
import CommonBanner from '../../components/CommonBanner/CommonBanner';
import image1 from "../../assets/images/blogPage/1.png"
import image2 from "../../assets/images/blogPage/2.png"
import image3 from "../../assets/images/blogPage/3.png"
import image4 from "../../assets/images/blogPage/4.png"
import image5 from "../../assets/images/blogPage/5.png"
import image6 from "../../assets/images/blogPage/6.png"
import image7 from "../../assets/images/blogPage/7.png"
import image8 from "../../assets/images/blogPage/8.png"
import image9 from "../../assets/images/blogPage/9.png"
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import icon1 from "../../assets/images/singleBlog/icon1.png"
import icon2 from "../../assets/images/singleBlog/icon2.png"
import { FiFacebook } from "react-icons/fi"
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoPinterestAlt } from "react-icons/bi"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import dayjs from 'dayjs';
import Loader from "../../components/Loader/Loader"


const itemsData = [
  {
    id: 1,
    title: 'How do we manage quality assurances?',
    date: "October 11, 2022",
    description: "In the construction business, it can feel as though you're working with an entity. it's a conversation with visitors. It's an ode to the art of storytelling. It's a monument. Not just to the subject matter and the billions of people whose lives have been touched by  cinema. It's a monument to the process of building itself. It took a global effort of coordination and will to tack the restoration of the Saban Building and execute the innovation of the David Geffen Theatre. The birth of this new LA icon pushed everyone involved to challenge themselves and each other; their stories are written into every concrete curve and golden tile.",
    comments: [],
    role: "Admin",
    image: image1
  },
  {
    id: 2,
    title: 'Capitalize on low hangings fruit to identify',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "User",
    image: image2
  },
  {
    id: 3,
    title: 'How do we manage quality assurances?',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "Admin",
    image: image3
  },
  {
    id: 4,
    title: 'A plan to solve California housing crisis',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "Admin",
    image: image4
  },
  {
    id: 5,
    title: 'Capitalize on low hangings fruit to identify',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "User",
    image: image5
  },
  {
    id: 6,
    title: 'How do we manage quality assurances?',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "User",
    image: image6
  },
  {
    id: 7,
    title: 'With diverse capabilities & extensive manufacturing',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "User",
    image: image7
  },
  {
    id: 8,
    title: "Wellness is now part of more colleges' health services",
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "Admin",
    image: image8
  },
  {
    id: 9,
    title: 'Achieving working with an entity',
    date: "October 11, 2022",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    comments: [],
    role: "Admin",
    image: image9
  },
];

const blogData = [
  {
    id: 1,
    title: 'How do we manage quality assurances?',
  },
  {
    id: 2,
    title: 'Capitalize on low hangings fruit to identify',
  },
  {
    id: 3,
    title: 'How do we manage quality assurances?',

  },
  {
    id: 4,
    title: 'A plan to solve California housing crisis',

  },
  {
    id: 5,
    title: 'Capitalize on low hangings fruit to identify',

  },
  {
    id: 6,
    title: 'How do we manage quality assurances?',

  },
  {
    id: 7,
    title: 'With diverse capabilities & extensive manufacturing',

  },
  {
    id: 8,
    title: "Wellness is now part of more colleges' health services",

  },
  {
    id: 9,
    title: 'Achieving working with an entity',

  },
];

const recentCommentss = [
  {
    id: 1,
    role: "Admin",
    blogTitle: "How do we manage quality assurances?"
  },
  {
    id: 2,
    role: "User",
    blogTitle: "Capitalize on low hangings fruit to identify"
  },
  {
    id: 3,
    role: "Admin",
    blogTitle: "How do we manage quality assurances?"
  },
  {
    id: 4,
    role: "User",
    blogTitle: "A plan to solve California housing crisis"
  },
  {
    id: 5,
    role: "Admin",
    blogTitle: "Capitalize on low hangings fruit to identify"
  },
]

const SingleBlogPage = () => {
  window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentComments, setRecentComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { blogId } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/api/Blogs/GetBlog/${blogId}`)
      .then((res) => {
        setLoading(true);
        console.log(res.data);
        setData(res.data)
        setLoading(false);
      })

    axios.get(`${import.meta.env.VITE_URL}/api/Blogs/GetRecentBlogs`)
      .then((res) => {
        setRecentBlogs(res.data)
      })

    axios.get(`${import.meta.env.VITE_URL}/api/Blogs/GetRecentComments`)
      .then((res) => {
        setRecentComments(res.data)
      })
  }, [])


  const handleSubmit = () => {

  }

  return (
    <>
      {
        loading ? <Loader /> : data.map((blog) => {
          return (
            <>
              <CommonBanner title="Blog" />
              <section className='single-blog-section' key={blog.id}>
                <Container>
                  <Row>
                    <Col md={1}>
                      <div className='social-links-div'>
                        <Link to="/">
                          <p>
                            <BiLogoFacebook size={30} className='fb-icon' />
                          </p>
                        </Link>

                        <Link to="/">
                          <p>
                            <BiLogoTwitter size={30} className='social-icon' />
                          </p>
                        </Link>

                        <Link to="/">
                          <p>
                            <BiLogoLinkedin size={30} className='social-icon' />
                          </p>
                        </Link>

                        <Link to="/">
                          <p>
                            <BiLogoPinterestAlt size={30} className='social-icon' />
                          </p>
                        </Link>
                      </div>

                    </Col>

                    <Col md={6}>
                      <h1 className='single-blog-heading'>
                        {blog.title}
                      </h1>
                      {/* <img src={blog.imagePath} alt="" className='img-fluid single-blog-image' /> */}
                      <img src={image3} alt="" className='img-fluid single-blog-image' />
                      <p className='my-4'>
                        <span className='date-span'>
                          <img src={icon1} alt="icon" className='img-fluid mx-2' />
                          {dayjs(blog.date).format("MM/DD/YYYY")}
                        </span>

                        <span className='category-span mx-4'>
                          <img src={icon2} alt="icon" className='img-fluid mx-2' />
                          Ideal Design
                        </span>
                      </p>

                      <p className='single-blog-desc'>
                        {blog.description}
                      </p>

                      <div>
                        <p className='comment-heading'>Leave A Comment</p>
                        <Form onSubmit={handleSubmit}>
                          <div>
                            <Row>
                              <Col>
                                <Form.Control required placeholder="First name" name='first_name' />
                              </Col>
                              <Col>
                                <Form.Control required placeholder="Last name" name='last_name' />
                              </Col>
                            </Row>
                          </div>


                          <div className='mt-4'>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                              <Form.Control
                                name='comments'
                                as="textarea"
                                required
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                              />
                            </FloatingLabel>
                          </div>

                          <button type="submit" className='post-button'>POST COMMENT</button>
                        </Form>
                      </div>

                      {/* <div>
                        {blog.comments.map((comment) => {
                          return (
                            <>
                              <p>
                                {comment.email}
                              </p>
                            </>
                          )
                        })}
                      </div> */}
                    </Col>

                    <Col md={1}></Col>

                    <Col md={4}>
                      <div className='blog-small-section'>
                        <div className='first-div'>
                          <p>Recent Posts</p>
                          <hr className='w-25 line' />
                          <ul className='right-section-blog'>
                            {
                              recentBlogs.map((blog) => {
                                return (
                                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                                    <li>{blog.title}</li>
                                  </Link>
                                )
                              })
                            }
                          </ul>
                        </div>

                        <div className="first-div mt-4">
                          <p>Recent Comments</p>
                          <hr className="w-25 line" />
                          <ul className="right-section-blog">
                            {
                              recentComments.map((comment) => {
                                return (
                                  <li key={comment.blogId}>
                                    <span className='role-span'>
                                      {comment.admin === 'true' ? "admin" : "user"}
                                    </span>
                                    on
                                    <Link to={`/blog/${comment.blogId}`}>
                                      <span className='blogTitle-span'>
                                        {comment.title}
                                      </span>
                                    </Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </>
          )
        })
      }



      {/* <CommonBanner title="Blog" />
      <section className='single-blog-section' key={name.id}>
        <Container>
          <Row>
            <Col md={1}>
              <div className='social-links-div'>
                <Link to="/">
                  <p>
                    <BiLogoFacebook size={30} className='fb-icon' />
                  </p>
                </Link>

                <Link to="/">
                  <p>
                    <BiLogoTwitter size={30} className='social-icon' />
                  </p>
                </Link>

                <Link to="/">
                  <p>
                    <BiLogoLinkedin size={30} className='social-icon' />
                  </p>
                </Link>

                <Link to="/">
                  <p>
                    <BiLogoPinterestAlt size={30} className='social-icon' />
                  </p>
                </Link>
              </div>

            </Col>

            <Col md={6}>
              <h1 className='single-blog-heading'>
                {name.title}
              </h1>
              <img src={name.image} alt="" className='img-fluid single-blog-image' />
              <p className='my-4'>
                <span className='date-span'>
                  <img src={icon1} alt="icon" className='img-fluid mx-2' />
                  {name.date}
                </span>

                <span className='category-span mx-4'>
                  <img src={icon2} alt="icon" className='img-fluid mx-2' />
                  Ideal Design
                </span>
              </p>

              <p className='single-blog-desc'>
                {name.description}
              </p>

              <div>
                <p className='comment-heading'>Leave A Comment</p>
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Row>
                      <Col>
                        <Form.Control required placeholder="First name" name='first_name' />
                      </Col>
                      <Col>
                        <Form.Control required placeholder="Last name" name='last_name' />
                      </Col>
                    </Row>
                  </div>


                  <div className='mt-4'>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                      <Form.Control
                        name='comments'
                        as="textarea"
                        required
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>
                  </div>

                  <button type="submit" className='post-button'>POST COMMENT</button>
                </Form>
              </div>
            </Col>

            <Col md={1}></Col>

            <Col md={4}>
              <div className='blog-small-section'>
                <div className='first-div'>
                  <p>Recent Posts</p>
                  <hr className='w-25 line' />
                  <ul className='right-section-blog'>
                    {
                      blogData.map((blog) => {
                        return (
                          <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <li>{blog.title}</li>
                          </Link>
                        )
                      })
                    }
                  </ul>
                </div>

                <div className="first-div mt-4">
                  <p>Recent Comments</p>
                  <hr className="w-25 line" />
                  <ul className="right-section-blog">
                    {
                      recentCommentss.map((comment) => {
                        return (
                          <li key={comment.id}>
                            <span className='role-span'>
                              {comment.admin === 'true' ? "admin" : "user"}
                            </span>
                            on
                            <Link to={`/blog/${comment.id}`}>
                              <span className='blogTitle-span'>
                                {comment.blogTitle}
                              </span>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

    </>
  )
}

export default SingleBlogPage