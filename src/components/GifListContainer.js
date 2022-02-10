import React , {useState} from "react";
import GifSearch from "./GifSearch"
import GifList from "./GifList"

// const API = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g"

function GifListContainer(){
    
    const [firstTreeGifs, setFirstTreeGifs]=useState([])
    
    const handleSearch =(search)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=mldfRySYpsJvAEbCejexC7eZQV4qcVj0&rating=g`)
        .then(r=>r.json())
        .then(data=>setFirstTreeGifs([data.data[0], data.data[1], data.data[2]]))
    }
    

    return(
        <div>
            <GifSearch onHandleSearch={handleSearch}/>
            <GifList gifs={firstTreeGifs}/>            
        </div>
    )
}

export default GifListContainer;