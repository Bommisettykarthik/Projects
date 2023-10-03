import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom' ;
import moviedata from './Moviedata';

function Recommends() {

  const [recommend,setRecommend] =useState([]);

  useEffect(()=>{
   const newRecommend =moviedata.filter((movie)=>movie.type === 'recommend');

   setRecommend(newRecommend);
  },[])



  return (
    <div className="container d-flex">
    <div className="row">
    <div className="col md-3 ">
    <h5 className='text-white '>Recommended for you</h5>
    {recommend.map((movie, col) => (
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

export default Recommends



