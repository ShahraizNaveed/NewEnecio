import React from 'react'
import "./ProductCategories.css"
import { Container } from 'react-bootstrap'
import product1 from "../../assets/images/productPage/products/machine1.png"
import { Link } from 'react-router-dom'


const category = [
    {
        id: 1,
        category: "Machine1",
        image: product1
    },
    {
        id: 2,
        category: "Machine2",
        image: product1
    },
    {
        id: 3,
        category: "Machine3",
        image: product1
    },
    {
        id: 4,
        category: "Machine4",
        image: product1
    },
]

const ProductCategories = () => {
    return (
        <section className="productCategory-section">
            <Container>
                <div className='d-flex justify-content-between'>
                    {
                        category.map((item) =>
                            <>
                                <Link to={`/products/${item.category}`}>
                                    <img src={item.image} alt="" className='img-fluid' />
                                    <p className='text-center my-3 black'>{item.category}</p>
                                </Link>
                            </>
                        )
                    }
                </div>
            </Container>
        </section>
    )
}

export default ProductCategories