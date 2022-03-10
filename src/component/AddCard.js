import axios from 'axios';
import React, { useState } from 'react'
import './AddCard.css'
function AddCard() {
  const [title,setTitle]=useState("");
  const [leadActor,setLeadActor]=useState("");
  const [imdbRating,setImdbRating]=useState("");
  const [img,setImg]=useState("");
  const [summary,setSummary]=useState("");
  const [genre,setGenre]=useState("");

  const addMovies= async()=>{
    let details=JSON.stringify({
      title:title,
      leadActor:leadActor,
      imdbRating:imdbRating,
      summary:summary,
      img:img,
      genre:genre
    })

  let url ="https://library-fb1d5-default-rtdb.firebaseio.com/books.json";
    await axios.post(url,details).then((res)=>console.log(res));
  }

  return (
    <div>
      <form className='form'>
      <input type="text" placeholder='Enter TITLE of the movie' className='input' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" placeholder='Lead actor of the movie' className='input'  value={leadActor} onChange={(e)=>setLeadActor(e.target.value)}/>
      <input type="text" placeholder='imdb rating of the movie' className='input' value={imdbRating} onChange={(e)=>setImdbRating(e.target.value)} />
      <input type="text" placeholder='genre' className='input' value={genre} onChange={(e)=>setGenre(e.target.value)} />
      <input type="text" placeholder='img url' className='input'  value={img} onChange={(e)=>setImg(e.target.value)}/>
      <textarea placeholder='summary'className='input' value={summary} onChange={(e)=>setSummary(e.target.value)}></textarea>
      <button type='submit' className='btn' onClick={addMovies}>Add movie</button>
      </form>
    </div>
  )
}

export default AddCard;
