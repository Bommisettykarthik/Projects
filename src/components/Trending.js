import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom' ;
import moviedata from './Moviedata';

function Trending() {

  const [trending,setTrending] =useState([]);

  useEffect(()=>{
   const trending =moviedata.filter((movie)=>movie.type === 'trending');

   setTrending(trending);
  },[])



  return (
    <div className="container d-flex">
    <div className="row">
    <div className="col md-3 ">
    <h5 className='text-white'>Trending</h5>
    {trending.map((movie, col) => (
          <Link to={'/details/' + movie.id}>
          <img className='m-2 imagesize' src={movie.cardImg} alt="" />
          </Link>
      ))}
    <div>
    </div>
    {/* <h3>Conditions of Use & Sale */}
    {/* Privacy Notice
   Interest-Based Ads  */}
  <p className='text-center'> © 2023,Karthik, Inc. or its affiliates</p>
{/* </h3> */}
    </div>
  </div>
</div>



  )
}

export default Trending