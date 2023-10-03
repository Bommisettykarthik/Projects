import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

import WomenCollection from '../components/WomenCollection'

import {Gents,Ladies} from "../data"


const MainPage = () => {

  // console.log(Gents)

  const [gentsFashion,setGentsFashion] =useState(Gents);
  const [ladiesFashion,setLadiesFashion]=useState(Ladies);

  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFashion={gentsFashion}/> 
        <WomenCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage