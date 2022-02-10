import React from "react"

function Gif({gif}){
    return(
    <li>
        <img src={gif.images.original.url} alt="gif" />
    </li>
    )
}

export default Gif;