import './App.css';
import Nav from './component/Nav';
import List from './component/List'
import AddCard from './component/AddCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [movie,setMovie]=useState([])

  const getMovies = async() =>{
    
  let url="http://localhost:3000/movies";
    await axios.get(url).then((result)=>setMovie(result))
  }

  useEffect(()=>{
    getMovies();
  },[])

  return(
    <div className='App'>
     <Nav />
    <div className="bodySection">
      <List props={movie}/>
      <AddCard />
    </div>
    </div>
  )
}

export default App;
