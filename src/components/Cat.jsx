import React from "react";

function Cat() {
    return(
        <div className="cat-container">
            <img alt="cat" className="background-cat" src={require("./Kitty-Cat.png")}/>
            <img alt="fish" className="fish" src={require("./Fish.png")}/>
            <p className="meow">Meow</p>
        </div>
    );
}

export default Cat;