
import React from 'react';
import { useEffect, useState } from "react";
import moviedata from './Moviedata';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


function Details() {
  const [detailData, setDetailData] = useState({});
  const { id } = useParams();

console.log(id);

  useEffect(() => {
    setDetailData(moviedata[id-1]);
  }, [id]);

  const handleTrailerClick = (trailer) => {
    window.location.href = trailer; // Redirect to the trailer URL
  };

  const handelPlayerClick =(player)=>{
    window.location.href = player;
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="position-relative min-vh-100 overflow-x-hidden">
            <div className="position-fixed imagetext top-0 start-0 end-0 bottom-0">
              <img src={detailData.imageBackground} alt="" className="w-100 h-100 " />
            </div>
            <div className="d-flex justify-content-around align-items-end ">
              <div className="col-md-4 mb-4">
                <img src={detailData.titleImg} alt="" className="w-50 titleimg" />
              </div>
              <div className="col-md-8 buttons">
                <div className="d-flex justify-content-start mb-4">
                  <button className="btn text-bg-secondary p-3 text-center  me-3" onClick={()=>{
                    handelPlayerClick(detailData.player);
                  }}>
                  <i class="bi bi-play-fill"></i>
                    <img src="images/play-icon-black.png" alt="" className="me-2" />
                    Player
                  </button>
                  <button className="btn text-bg-secondary me-3" onClick={()=>{
                    handleTrailerClick(detailData.trailer);
                  }}>
                  <i class="bi bi-play-fill"></i> 
                    <img src="images/play-icon-white.png" alt="" className="me-2" />
                    Trailer
                    
                  </button>
                </div>
                <div className="mb-4 imagetext ">
                  <h5 >{detailData.subTitle}</h5>
                </div>
                <div className="mb-4">
                  <p className='imagetext'>{detailData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;



