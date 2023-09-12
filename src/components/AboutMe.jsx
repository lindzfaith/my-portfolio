import React from "react";

function AboutMe() {
    return(
        <div className="about-me-container">
            <div className="row">
                <h1>Who is Lindsey Dunkley?</h1>
            </div>
            <div className="row">
                <h2>About Me</h2>
                <div className="image-container">
                    <img src={require("./cat-picture.jpeg")}/>
                </div>
                <ul>
                    <li>I'm a senior-level Computer Science student earning a Bachelor's in December this year.</li>
                    <li>I have a deaf kitten named Peach.</li>
                    <li>I started coding in 2019.</li>
                    <li>I'm a first-generation college student.</li>
                    <li>My favorite programming language is JavaScript, but I love working with Java.</li>
                    <li>When I'm not coding, I'm reading or playing games.</li>
                </ul>
            </div>
        </div>
    );

}

export default AboutMe;