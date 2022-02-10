import React from "react";
import Gif from "./Gif"
function GifList({gifs}){
    return(
        <ul>
            {gifs.map((gif)=> <Gif key={gif.id} gif={gif} />)}
        </ul>
    )
}

export default GifList;