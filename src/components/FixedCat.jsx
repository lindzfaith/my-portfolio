import React from "react";

function FixedCat() {
    return(
        <div>
            <div className="cat-container">
                <img alt="cat" className="fixed-cat" src={require("./Kitty-Cat.png")}/>
            </div>
        </div>
    );
}

export default FixedCat;