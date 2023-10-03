import React from 'react'
import "./homebanner.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <section className='homebanner'>
            <div className='banner'>
                <h1>Build with the <span className='banner-span'>Best Team</span></h1>
                <p>Create structure with the right people</p>
                <Link to="/contact">
                    <button className='banner-btn'>Get In Touch With Us</button>
                </Link>
            </div>
        </section>
    )
}

export default HomeBanner