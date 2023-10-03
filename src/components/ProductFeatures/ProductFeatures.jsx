import React from 'react'
import "./ProductFeatures.css"
import { Col, Container, Row } from 'react-bootstrap'
import feature from "../../assets/images/productPage/singleProduct/features.png"
import arrow from "../../assets/images/productPage/singleProduct/arrow.png"


const features = [
    {
        id: 1,
        image: arrow,
        name: "Compact Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Iaculis proin morbi cras magna adipiscing viverra neque diam. Convallis at at felis consectetur convallis. Blandit nisi."
    },
    {
        id: 2,
        image: arrow,
        name: "Precision and Economy",
        desc: "Lorem ipsum dolor sit amet consectetur. Iaculis proin morbi cras magna adipiscing viverra neque diam. Convallis at at felis consectetur convallis. Blandit nisi."
    },
    {
        id: 3,
        image: arrow,
        name: "Flow Distribution System",
        desc: "Lorem ipsum dolor sit amet consectetur. Iaculis proin morbi cras magna adipiscing viverra neque diam. Convallis at at felis consectetur convallis. Blandit nisi."
    },
    {
        id: 4,
        image: arrow,
        name: "Smart Control System",
        desc: "Lorem ipsum dolor sit amet consectetur. Iaculis proin morbi cras magna adipiscing viverra neque diam. Convallis at at felis consectetur convallis. Blandit nisi."
    },
    {
        id: 5,
        image: arrow,
        name: "High Performance",
        desc: "Lorem ipsum dolor sit amet consectetur. Iaculis proin morbi cras magna adipiscing viverra neque diam. Convallis at at felis consectetur convallis. Blandit nisi."
    },
]


const ProductFeatures = () => {
    return (
        <>
            <h2 className='text-center feature-heading'>
                <img src={feature} alt="" className='img-fluid mx-4' />
                Features
            </h2>
            <section className='feature-section'>

                <Container>
                    <Row>
                        {
                            features.map((item) => {
                                return (
                                    <>
                                        <Col md={6}>
                                            <div>
                                                <img src={item.image} alt="" className='img-fluid mx-4' />
                                                <span className='features-heading'>{item.name}</span>
                                            </div>
                                            <div className='px-4 feature-paragraph'>
                                                <p>{item.desc}</p>
                                            </div>
                                        </Col >
                                    </>
                                )
                            })
                        }

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductFeatures