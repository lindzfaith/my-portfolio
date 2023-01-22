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
            <a href="/portfolio">
                <label className="header-links">Projects</label>
            </a>
            <select className="dropdown">
                <option>Click Me</option>
                <option>Home</option>
                <option>
                    About Me
                </option>
                <option>
                    Skills
                </option>
                <option>
                    Projects
                </option>
            </select>

        </div>
    );
}

export default Header;