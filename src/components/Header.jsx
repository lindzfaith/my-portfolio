import React from "react";
import '../index.css';

function Header() {
    return (
        <div className="header">
            <a href="/">
                <label className="header-links">Home</label>
            </a>
            <a href="/about">
                <label className="header-links">About Me</label>
            </a>
            <a href="/skills">
                <label className="header-links">Skills</label>
            </a>
            <a href="/projects">
                <label className="header-links">Projects</label>
            </a>
            <div className="header-dropdown" id="page" value="page">
                <button onClick={() => setStyle()} className="dropdown-button">Click Me</button>
                <br/>
                <span className="dropdown" value="/"><a href="/">Home</a></span>
                <br/>
                <span className="dropdown" value = "/about">
                    <a href="/about">About Me</a>
                </span>
                <br/>
                <span className="dropdown" value="/skills">
                    <a href="/skills">Skills</a>
                </span>
                <br/>
                <span className="dropdown" value="/projects">
                <a href="/projects">Projects</a>
                </span>
                <br/>
            </div>
        </div>
    );
}

function setStyle() {
    var x = document.getElementsByClassName('dropdown');
    while (x.length !== 0) {
        x[0].className = 'dropdown-show';
    }
    var y = document.getElementsByClassName('dropdown-button');
    y[0].className = 'dropdown';
}

export default Header;