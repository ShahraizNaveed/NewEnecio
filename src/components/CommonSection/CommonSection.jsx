import React from 'react'
import "./CommonSection.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CommonSection = () => {
    return (
        <>
            <section className='common-section'>
                <div className='left-section'>
                    <div>
                        <p className='chooseUs'>WHY CHOOSE US?</p>
                        <p className='make-world-better'>Make The World Better Place With Construction Quality</p>
                        <p className='south-central'>South-central construction region since 2005</p>
                    </div>
                </div>

                <div className='right-section'>
                    <div>
                        <p className='bring-idea'>Bring Your Ideas</p>
                        <p className='innovation-to-life'>Innovation to life</p>
                        <Link to="/contact">
                            <button className='contact-expert'>Contact Our Expert</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonSection