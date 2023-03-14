import React from "react";
import memesData from "../memesData";

function Meme () {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <div className="meme-container">
            <div>
                <input className="meme-input" type="text"/>
                <input className="meme-input" type="text"/>
                <button className="meme-btn" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <img className="meme-img" src={`${memeImage}`} alt="meme img" />
        </div>
    )
}

export default Meme