import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import './Card.css'
function Card({id,title ,genre,img,leadActor,summary,imdbRating}) {
       
   const[modalIsOpen,setModalIsOpen]=useState(false)
   
  const [updateTitle,setUpdateTitle]=useState("");
  const [updateLeadActor,setUpdateLeadActor]=useState("");
  const [updateImdbRating,setUpdateImdbRating]=useState("");
  const [updateImg,setUpdateImg]=useState("");
  const [updateSummary,setUpdateSummary]=useState("");
  const [updateGenre,setUpdateGenre]=useState("");

  function deleteDetails() {
    console.log(id)
    let url = `https://library-fb1d5-default-rtdb.firebaseio.com/books/${id}.json`
    axios.delete(url).then((response) => console.log(response)).catch((err) => console.log(err))
    window.location.reload()
  }
   
  function editDetails(id){
    console.log(id)
    let url = `https://library-fb1d5-default-rtdb.firebaseio.com/books/${id}.json`
    let updateDetails= JSON.stringify({
      title:updateTitle,
      leadActor:updateLeadActor,
      imdbRating:updateImdbRating,
      summary:updateSummary,
      img:updateImg,
      genre:updateGenre
    })
     axios.put(url,updateDetails).then((res)=>console.log(res));
    setModalIsOpen(false)
    }

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
        <Modal isOpen={modalIsOpen}>
          <div style={{width:"20vw",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <input type="text" placeholder='Enter TITLE of the movie' className='input' value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)} />
      <input type="text" placeholder='Lead actor of the movie' className='input'  value={updateLeadActor} onChange={(e)=>setUpdateLeadActor(e.target.value)}/>
      <input type="text" placeholder='imdb rating of the movie' className='input' value={updateImdbRating} onChange={(e)=>setUpdateImdbRating(e.target.value)} />
      <input type="text" placeholder='genre' className='input' value={updateGenre} onChange={(e)=>setUpdateGenre(e.target.value)} />
      <input type="text" placeholder='img url' className='input'  value={updateImg} onChange={(e)=>setUpdateImg(e.target.value)}/>
      <textarea placeholder='summary'className='input' value={updateSummary} onChange={(e)=>setUpdateSummary(e.target.value)}></textarea>
      <button type='submit' className='btn' isOpen={false} onClick={()=>editDetails(id)}>Add movie</button>
      </div>
        </Modal>
    
      <button className='btn1' type='submit' onClick={()=>setModalIsOpen(true)}>Edit</button>
      <button className='btn2' type='submit' onClick={()=>deleteDetails(id)}>Delete</button>
    
      </div>
    </div> 
  )
}

export default Card;
