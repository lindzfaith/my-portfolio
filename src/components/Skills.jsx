import React from "react";

function Skills() {
    return(
        <div className="hero-banner-container">
            <div className="skill-container">
                <h2 className="skill-title">Programming</h2>
                <br/>
                <div className="skill">
                    <span className="skill-name">Java</span>
                    <label className="skill-description">Proficient</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">JavaScript</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">C</span>
                    <label className="skill-description">Proficient</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">Python</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
                <h2 className="skill-title">Web & Database</h2>
                <br/>
                <div className="skill">
                    <span className="skill-name">HTML5</span>
                    <label className="skill-description">Proficient</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">CSS</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">MySQL</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
            </div>
            <div className="skill-container">
                <h2 className="skill-title">Libraries/Frameworks</h2>
                <br/>
                <div className="skill">
                    <span className="skill-name">Angular</span>
                    <label className="skill-description">Proficient</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">React</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
                <h2 className="skill-title">Tools/Cloud</h2>
                <br/>
                <div className="skill">
                    <span className="skill-name">Git</span>
                    <label className="skill-description">Proficient</label>
                    <br/>
                </div>
                <div className="skill">
                    <span className="skill-name">AWS</span>
                    <label className="skill-description">Familiar</label>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Skills;