import React from "react";
import '../App.css'
import {SocialIcon} from 'react-social-icons';

function HeroBanner() {
    return(
        <div className="hero-banner-container"> 
            <h1 className="name">LINDSEY DUNKLEY</h1>
            <h2>Your Future Software Engineer Intern</h2>
            <div className="social-icons">
                <i><SocialIcon url="https://twitter.com/lindzdev"/></i>
                <i><SocialIcon url="https://www.linkedin.com/in/lindsey-dunkley-145a13220/"/></i>
                <i><SocialIcon url="https://github.com/lindzfaith"/></i>
            </div>
        </div>
    );
}

export default HeroBanner;