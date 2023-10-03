import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom' ;
import moviedata from './Moviedata';

function NewDisney() {

  const [newDisney,setNewDiseny] =useState([]);

  useEffect(()=>{
   const newMovieDisney =moviedata.filter((movie)=>movie.type === 'new');

   setNewDiseny(newMovieDisney);
  },[])



  return (
    <div className='navbar'>
  <div className="container d-flex" >
    <div className="row">
    <div className="col md-3 ">
    <h5 className='text-white'>New To Disney</h5>
    {newDisney.map((movie, col) => (
          <Link to={'/details/' + movie.id}>
          <img className='m-2 imagesize' src={movie.cardImg} alt="" />
          </Link>
      ))}
    <div>
    </div>
  
    </div>
  </div>
</div>
    </div>
  

  )
}

export default NewDisney
