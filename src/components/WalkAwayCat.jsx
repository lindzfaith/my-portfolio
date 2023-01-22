import React from "react";

function FixedCat() {
    return(
        <div>
            <div className="cat-container">
                <img alt="cat" className="walk-away-cat" src={require("./Kitty-Cat.png")}/>
            </div>
        </div>
    );
}

export default FixedCat;