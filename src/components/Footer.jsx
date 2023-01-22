import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <div className="footer">
            <i><SocialIcon url="https://twitter.com/lindzdev"/></i>
            <i><SocialIcon url="https://www.linkedin.com/in/lindsey-dunkley-145a13220/"/></i>
            <i><SocialIcon url="https://github.com/lindzfaith"/></i>
        </div>
    );
}

export default Footer;