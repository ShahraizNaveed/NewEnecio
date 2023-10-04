import "./homebanner.css"
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <section className='homebanner'>
            <div className='banner'>
                <h1>Your Construction Vision, <span className='banner-span'>Our Machinery Expertise</span></h1>
                <p>Empowering Your Construction Success with Machinery Excellence</p>
                <Link to="/contact">
                    <button className='banner-btn'>Get In Touch With Us</button>
                </Link>
            </div>
        </section>
    )
}

export default HomeBanner