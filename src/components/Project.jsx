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
        </div>
    );

};

export default Project;