import React from "react";

function Project() {
    return (
        <div className="projects-container"> 
            <div className="project-container">
                <img alt="Social Media App" width="100%" src={require("./SocialMedia.png")}/>
                <h2>Social Media Application</h2>
                <p>January 2023</p>
                <ul>
                    <li>Created a web application that uses REST calls for creating,
                    liking, and replying to posts.
                    </li>
                </ul>
                <div className="stack">
                    <p>Stack: Spring Boot, Java, MySQL, Angular, JavaScript, HTML, CSS </p>
                </div>
                <div className="project-container-links">
                    <a href="https://github.com/lindzfaith/social-media-application"><span>Github</span></a>
                </div>
            </div>
            <div className="project-container">
                <img alt="Recipe Randomizer page" width="100%" src={require("./RecipeRandomizer.png")}/>
                <h2>Recipe Randomizer Website</h2>
                <p>January 2023</p>
                <ul>
                    <li>Created a website that randomly returns a recipe to the user based on their meal selection.
                    </li>
                </ul>
                <div className="stack">
                    <p>Stack: React, JavaScript, HTML, CSS </p>
                </div>
                <div className="project-container-links">
                    <a href="https://github.com/lindzfaith/recipe-randomizer-website"><span>Github</span></a>
                    <a href="https://recipe-randomizer-website.vercel.app/randomizer"><span>Website</span></a>
                </div>
            </div>
            <div className="project-container">
                <img alt="E-Commerce Landing Page" width="100%" src={require("./ECommerce.png")}/>
                <h2>E-Commerce Website</h2>
                <p>July 2022</p>
                <ul>
                    <li>Created a website using React components and State to add products to cart, view them, and remove them.</li>
                </ul>
                <div className="stack">
                    <p>Stack: JavaScript, ReactJS, Sanity, NextJS </p>
                </div>
                <div className="project-container-links">
                    <a href="https://github.com/lindzfaith/E-Commerce-Website"><span>Github</span></a>
                    <a href="https://e-commerce-4bp4kmmzq-lindzfaith.vercel.app/"><span>Website</span></a>
                </div>
            </div>
            <div className="project-container">
                <img alt="Twitter Bot page" width="100%" src={require("./TwitterBot.png")}/>
                <h2>Twitter Bot</h2>
                <p>February 2022</p>
                <ul>
                    <li>Created a bot on Twitter that retweets two tweets every hour with the phrase "Sims 4" in it.
                    </li>
                </ul>
                <div className="stack">
                    <p>Stack: Python, AWS, Docker, APIs </p>
                </div>
                <div className="project-container-links">
                    <a href="https://github.com/lindzfaith/twitter-bot"><span>Github</span></a>
                    <a href="https://twitter.com/TheSimsBot"><span>Website</span></a>
                </div>
            </div>
        </div>
    );

};

export default Project;