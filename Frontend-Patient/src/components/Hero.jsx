
import React from 'react';

const Hero = ({ title, imageUrl }) => {
    return ( 
        <div className='hero container' >
            <div className="banner">
                <h1>{title}</h1>
                <p>
                Welcome to NutriFit – Your Partner in Nutrition and Wellness
                At Life Care, we believe that good health begins with the right nutrition. Our expert dieticians
                 are dedicated to helping you achieve your wellness goals through personalized diet plans, evidence-based 
                 guidance, and compassionate support. Whether you're aiming to manage weight, improve digestion, or boost 
                 overall health, we're here to guide you every step of the way. Your journey to a healthier, happier you 
                 starts here.
                </p>
            </div>
            <div className="banner">
                <img src={imageUrl} alt="Hero" className='animated-image'/>
                <span>
                    <img src="/Vector.png" alt="Vector" />
                </span>
            </div>
        </div>
    );
}

export default Hero;
