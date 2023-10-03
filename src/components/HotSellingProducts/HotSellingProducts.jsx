import React from 'react'
import "./HotSellingProducts.css"
import { Col, Container, Row } from 'react-bootstrap'
import prod from "../../assets/images/productPage/hotSelling/product1.png"
import { Link } from 'react-router-dom'

const products = [
    {
        id: 1,
        image: prod,
        category: "Machine1",
        noOfPurchase: 753,
        productModel: "SRSC45H1",
        productName: "Reach Stacker",
        productDesc: "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus."
    },
    {
        id: 2,
        image: prod,
        category: "Machine2",
        noOfPurchase: 598,
        productModel: "STR318",
        productName: "Tunnel Roadheader",
        productDesc: "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus."
    },
    {
        id: 3,
        image: prod,
        category: "Machine3",
        noOfPurchase: 266,
        productModel: "SRSC45H1",
        productName: "Reach Stacker",
        productDesc: "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus."
    },
    {
        id: 4,
        image: prod,
        category: "Machine4",
        noOfPurchase: 327,
        productModel: "STR318",
        productName: "Tunnel Roadheader",
        productDesc: "Lorem ipsum dolor sit amet consectetur. Massa aliquam aliquam senectus nunc. Velit nullam amet lobortis massa leo feugiat. Massa sed amet proin porta molestie lectus quisque suscipit. A enim turpis duis ultricies sem. Venenatis gravida metus tincidunt odio dui sed gravida platea. Tristique ut non duis viverra aliquam ut mi. Sollicitudin dolor sodales diam turpis sagittis ac. Lacus."
    },
]

const HotSellingProducts = () => {
    return (
        <>
            <Container fluid>
                <iframe className='iframe' src="https://www.youtube.com/embed/Mp8IXI1kzvQ?si=Dc5MCOzT-1u2uMqH"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </Container>

            <section className='products-section'>
                <h1 className='d-flex justify-content-center selling-heading'>Our Hotselling Products</h1>

                <Container>
                    <Row>
                        {products.map((prod, index) => (
                            <div
                                key={index}
                            >
                                <Row style={{ direction: index % 2 === 0 ? 'ltr' : 'rtl' }} className={index % 2 == 0 ? 'ltr' : 'rtl'}>
                                    <Col md={6} className=''>
                                        <div className='product-details'>
                                            <Link to={`/products/${prod.category}/${prod.id}`}>
                                                <h5>{prod.productModel}</h5>
                                            </Link>

                                            <Link to={`/products/${prod.category}/${prod.id}`}>
                                                <h4>{prod.productName}</h4>
                                            </Link>

                                            <p>{prod.productDesc}</p>

                                            <div className='product-btn'>
                                                <Link to={`/products/${prod.category}/${prod.id}`}>
                                                    <button className='first'>Request A Quote</button>
                                                </Link>
                                                <Link to={`/products/${prod.category}/${prod.id}`}>
                                                    <button className='second mx-3'>Learn More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className='hot-product text-center'>
                                            <Link to={`/products/${prod.category}/${prod.id}`}>
                                                <img
                                                    src={prod.image}
                                                    alt=""
                                                    className='img-fluid'
                                                />
                                            </Link>

                                            <div className='hot-product-absolute'>
                                                <div>
                                                    <span className='typography-product-span'>{prod.noOfPurchase}</span>
                                                    <p className='typography-product-p'>YEARS</p>
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
    )
}

export default HotSellingProducts