import React from "react";
import './Hero.css';
import arrow from '../Assets/arrow.png';
import bag1 from '../Assets/bag1.png';
import image3 from '../Assets/image3.jpg';

const Hero = () => {
    return (
        <div className='hero'> 
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-bag-icon">
                    <p>New</p>
                    <img src={bag1} alt="" />
                    <div>
                        <p>collection</p>
                        <p>for everyone</p>
                    </div>
                </div>
                <div className="hero-latest-btn">
                    <div> Latest Collection</div>
                    <img src={arrow} alt="Arrow Image" />
                </div>
            </div>
            <div className="hero-right">
                <img src={image3} alt="image3"/>
            </div>
        </div>
    );
}

export default Hero;
