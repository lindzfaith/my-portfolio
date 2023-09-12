import React from "react";
import '../App.css'
import {SocialIcon} from 'react-social-icons';

function HeroBanner() {
    return(
        <div className="hero-banner-container"> 
            <h1 className="name">LINDSEY DUNKLEY</h1>
            <h2>Your Future Full-Stack Developer</h2>
            <div className="social-icons">
                <i><SocialIcon target="_blank" url="https://twitter.com/lindzdev"/></i>
                <i><SocialIcon target="_blank" url="https://www.linkedin.com/in/lindsey-dunkley-145a13220/"/></i>
                <i><SocialIcon target="_blank" url="https://github.com/lindzfaith"/></i>
            </div>
        </div>
    );
}

export default HeroBanner;