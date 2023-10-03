import React from 'react'

function Viewers() {
  return (
    
      <div class="container mb-4">
  <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
    <div class="col mt-4">
      <div class="card">
        <img className='image' src="images\viewers-disney.png" alt="..."/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564674844-disney.mp4" type='video/mp4'></source>
        </video>
      </div>
    </div>
    <div class="col mt-4">
      <div class="card">
        <img className='image' src="images/viewers-marvel.png" alt="..."/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676115-marvel.mp4" type='video/mp4'></source>
        </video>
      </div>
    </div>
    <div class="col mt-4">
      <div class="card">
        <img className='image' src="images/viewers-national.png" alt="..."/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676296-national-geographic.mp4" type='video/mp4'></source>
        </video>
      </div>
    </div>
    <div class="col mt-4">
      <div class="card">
        <img className='image' src="images/viewers-pixar.png" alt="..."/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1564676714-pixar.mp4" type='video/mp4'></source>
        </video>
      </div>
    </div>
    <div class="col mt-4">
      <div class="card">
        <img className='image' src="images/viewers-starwars.png" alt="..."/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="videos/1608229455-star-wars.mp4" type='video/mp4'></source>
        </video>
      </div>
    </div>
   
  </div>
</div>
 
  )
}

export default Viewers
    