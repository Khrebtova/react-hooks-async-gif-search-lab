import React, {useState} from "react";

function GifSearch({onHandleSearch}){
    const [search, setSearch] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        onHandleSearch(search)
        e.target.search.value=""
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term</label>
            <input type="text" name="search" onChange={(e)=>setSearch(e.target.value)}></input>                   
            <button type="submit">Find gifs</button>
        </form>
    )
}

export default GifSearch;