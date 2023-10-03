import React from 'react';
import NewDisney from './NewDisney';
import Orginals from './Orginals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import Slider from './Slider'
import Header from './Header'




function Home() {
  return (
 <div className='Container'>
  
   <Header/>
   <Slider/>
   <Viewers/>
   <Recommends/>
   <NewDisney/>
   <Orginals/>
   <Trending/>

 </div>

  )
}

export default Home


