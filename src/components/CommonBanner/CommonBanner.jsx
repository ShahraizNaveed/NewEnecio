import React from 'react'
import "./CommonBanner.css"
import { Container } from 'react-bootstrap'

const CommonBanner = (props) => {
    return (
        <section className='commonBanner d-flex justify-content-center align-items-center'>
            <Container>
                <div className='d-flex justify-content-center align-items-center m-auto'>
                    <h1>{props.title}</h1>
                </div>
            </Container>
        </section>
    )
}

export default CommonBanner