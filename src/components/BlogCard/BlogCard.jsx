import React, { useEffect, useState } from 'react'
import "./BlogCard.css"
import { Card, Col, Container, Row } from 'react-bootstrap'
import image1 from "../../assets/images/blogPage/1.png"
import image2 from "../../assets/images/blogPage/2.png"
import image3 from "../../assets/images/blogPage/3.png"
import image4 from "../../assets/images/blogPage/4.png"
import image5 from "../../assets/images/blogPage/5.png"
import image6 from "../../assets/images/blogPage/6.png"
import image7 from "../../assets/images/blogPage/7.png"
import image8 from "../../assets/images/blogPage/8.png"
import image9 from "../../assets/images/blogPage/9.png"
import { FaUserAlt } from "react-icons/fa"
import { BsFillChatFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

const itemsData = [
    {
        id: 1,
        title: 'How do we manage quality assurances?',
        date: "October 11, 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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

const BlogCard = () => {
    const itemsPerPage = 3; // Number of items to show per page
    const [displayedItems, setDisplayedItems] = useState(itemsPerPage);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`http://110.93.240.168:8080/api/Blogs/GetBlogs`)
            .then((res) => {
                console.log(res.data);
                setBlogs(res.data)
            })
    }, [])

    const handleLoadMore = () => {
        setDisplayedItems(displayedItems + itemsPerPage);
    };
    return (
        <section className='blog-card-section'>
            <Container>
                <Row>
                    {blogs.slice(0, displayedItems).map(item => (
                        <Col md={4} key={item.id} className='d-flex justify-content-center'>
                            <Link to={`/blog/${item.id}`}>
                                <Card key={item.id} style={{ width: '18rem' }} className="fade-in">
                                    <div className='blog-image'>
                                        {/* <Card.Img variant="top" src={item.imagePath} /> */}
                                        <Card.Img variant="top" src={image3} />
                                        <p className='blog-date'>{dayjs(item.date).format("MM/DD/YYYY")}</p>
                                    </div>
                                    <Card.Body>
                                        <p className='role-comment d-flex align-items-center justify-content-center'>
                                            <FaUserAlt size={12} className='user-icon mx-2' />  {item.admin == true ? "admin" : "user" }
                                            <span className='mx-3'>|</span>
                                            <BsFillChatFill size={12} className='user-icon' />
                                            <span className='mx-1'>{item.commentsCount}</span>
                                            Comments
                                        </p>
                                        <Card.Title>
                                            <span className='card-title mx-2'>{item.title}</span>
                                        </Card.Title>
                                        <Card.Text>
                                            {item.description.slice(0, 50)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}


                    {/* {itemsData.slice(0, displayedItems).map(item => (
                        <Col md={4} key={item.id} className='d-flex justify-content-center'>
                            <Link to={`/blog/${item.id}`}>
                                <Card key={item.id} style={{ width: '18rem' }} className="fade-in">
                                    <div className='blog-image'>
                                        <Card.Img variant="top" src={item.image} />
                                        <p className='blog-date'>{item.date}</p>
                                    </div>
                                    <Card.Body>
                                        <p className='role-comment d-flex align-items-center justify-content-center'>
                                            <FaUserAlt size={12} className='user-icon mx-2' />  {item.admin == true ? "admin" : "user"}
                                            <span className='mx-3'>|</span>
                                            <BsFillChatFill size={12} className='user-icon' />
                                            <span className='mx-1'>{item.commentsCount}</span>
                                            Comments
                                        </p>
                                        <Card.Title>
                                            <span className='card-title mx-2'>{item.title}</span>
                                        </Card.Title>
                                        <Card.Text>
                                            {item.description.slice(0, 50)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))} */}

                    <div className='text-center'>
                        {displayedItems < blogs.length && (
                            <button onClick={handleLoadMore} className='load-btn'>Load More</button>
                        )}
                    </div>

                </Row>
            </Container>
        </section>
    )
}

export default BlogCard