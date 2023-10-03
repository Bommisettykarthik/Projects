import React from 'react'


function Header() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#logo">
    </a>
    <img className='logo 'src="/images/logo1.png " alt=""></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item p-1 ">
       <p><a className="navbar-brand text-white" href="#Home">
       <i className="bi bi-house-door-fill"></i>
       HOME
      </a></p>
        </li>
        <li className="nav-item p-1">
       <p> <a className="navbar-brand text-white" href="#Search">
       <i className="bi bi-search"></i>
       SEARCH
      </a></p>
        </li>
        <li className="nav-item p-1">
        <p><a className="navbar-brand text-white" href="#Orginal">
        <i className="bi bi-star"></i>
      ORIGINAL
      </a></p>
        </li>
        <li className="nav-item p-1">
        <p> <a className="navbar-brand text-white" href="#Movie">
        <i className="bi bi-film"></i>
      MOVIE
      </a></p>
        </li>
        <li className="nav-item p-1">
       <p><a className="navbar-brand text-white" href="#Series">
      <img src="/images/seriesicon.svg" alt="Logo" width="20" height="30" className="d-inline-block align-text-top"/>
      SERIES
      </a></p> 
        </li>
      </ul>
     
    </div>
  </div>
   </nav>

 </div>
   
 


  )
}

export default Header


