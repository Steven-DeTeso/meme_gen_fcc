import React from "react";

function Header () {
    return (
        <div className="header-container">
            <div className="header-title">
                <img src={require("../images/troll-face.png")} alt="troll face" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}

export default Header