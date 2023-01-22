import React from "react";

function Project(project) {
    return (
        <div>
            <header>{project.name}</header>
            <p>{project.date}</p>
            <p>{project.skills}</p>
        </div>
    );

};

export default Project;