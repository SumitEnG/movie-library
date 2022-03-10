import React from 'react';
import Card from './Card';
import './List.css';

function List({data}) {
  console.log(data.data)
  return (
    <div className="list" >

      {Object.keys(data.data).map((item,index)=>(
      <Card 
      //   key={index}
        title={data.data[item].title}
      //   genre={item.genre}
      //  img={item.img}
      //  leadActor={item.leadActor}
      //  summary={item.summary}
      //  imdbRating={item.imdbRating}  
      />))}
      
    </div>
  )
}

export default List;
