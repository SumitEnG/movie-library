import React from 'react';
import Card from './Card';
import './List.css';

function List({props}) {
  return (
    <div className="list" >

      {props.data?.map((item,index)=>(
      <Card 
       key={index}
       title={item.title}
       genre={item.genre}
       img={item.img}
       leadActor={item.leadActor}
       summary={item.summary}
       imdbRating={item.imdbRating}  
      />))}
      
    </div>
  )
}

export default List;
