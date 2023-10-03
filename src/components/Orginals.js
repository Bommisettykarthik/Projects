import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom' ;
import moviedata from './Moviedata';

function Originals() {

  const [originals,setOriginals] =useState([]);

  useEffect(()=>{
   const Orginals =moviedata.filter((movie)=>movie.type === 'original');

   setOriginals(Orginals);
  },[])



  return (
    <div className="container d-flex">
    <div className="row">
    <div className="col md-3 ">
    <h5 className='text-white'>Originals</h5>
    {originals.map((movie, col) => (
          <Link to={'/details/' + movie.id}>
          <img className='m-2 imagesize' src={movie.cardImg} alt="" />
          </Link>
      ))}
    <div>
    </div>
  
    </div>
  </div>
</div>

  )
}

export default Originals
