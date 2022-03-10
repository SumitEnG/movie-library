import React from 'react'
import './Card.css'
function Card({title ,genre,img,leadActor,summary,imdbRating}) {
  return (
    <div className='cardBody'>
      <h3>{title}</h3>
      <div style={{width:"100%",display:"flex"}}>
      <div className='insideCard' style={{width:"100%",justifyContent:"flexStart",paddingLeft:"10px"}}>
        <p>Lead actor:{leadActor}</p>
        <p>imdb-rating:{imdbRating}</p>
        <p>genre:{genre}</p>
      </div>
      <img src={img} style={{height:"150px",width:"140px",borderRadius:"10px",paddingTop:"10px",paddingRight:"10px"}}></img>
      </div>
      <p className="summary">Summary:{summary}</p>
      <div className="button">
      <button className='btn1'>Edit</button>
      <button className='btn2'>Delete</button>
      </div>
    </div> 
  )
}

export default Card;
