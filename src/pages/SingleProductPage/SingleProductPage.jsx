import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import "./SingleProductPage.css"
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import { TbMathGreater } from "react-icons/tb"
import ProductSpecification from '../../components/productSpecification/productSpecification';


const SingleProductPage = () => {
    window.scrollTo(0, 0);
    const { category } = useParams();
    return (
        <>
            <CommonBanner title="Single Product" />
            <section>
                <Container>
                    <div className='bread-crumb'>
                        <p>
                            <Link to="/products">
                                Product
                            </Link>
                            <span className='mx-3'><TbMathGreater /></span>

                            <Link to={`/products/${category}`}>
                                {category}
                            </Link>
                            <span className='mx-3'><TbMathGreater /></span>
                            Hello
                        </p>
                    </div>
                </Container>

                <div className='product-banner'>
                    <div className="gradient">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <div className='single-product-specs'>
                                            <p className='white'>Below 40T</p>
                                            <p className='yellow'>Reach Stacker</p>
                                        </div>

                                        <div className='specs-2nd-div'>
                                            <p>Max Lifitng Height: <span>yy</span></p>
                                            <p>Max Loading Capacity: <span>yy</span></p>
                                            <p>Wheel Base: <span>yy</span></p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>


                <ProductFeatures />
                <ProductSpecification />

            </section>
        </>

    )
}

export default SingleProductPage