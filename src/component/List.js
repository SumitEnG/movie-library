import React from 'react';
import Card from './Card';
import './List.css';

function List({data}) {
  console.log(data.data)
  return (
    <div className="list" >

      {data.data && Object.keys(data.data).map((item,index)=>(
      <Card 
       uniqueId={item}
       key={item}
       title={data.data[item].title}
       genre={data.data[item].genre}
       img={data.data[item].img}
       leadActor={data.data[item].leadActor}
       summary={data.data[item].summary}
       imdbRating={data.data[item].imdbRating}  
      />))}
      
    </div>
  )
}

export default List;
