import React from "react";

function Meme () {
    return (
        <div className="meme-container">
            <form>
                <input className="meme-input" type="text"/>
                <input className="meme-input" type="text"/>
                <button className="meme-btn">Get a new meme image  🖼</button>
            </form>
        </div>
    )
}

export default Meme