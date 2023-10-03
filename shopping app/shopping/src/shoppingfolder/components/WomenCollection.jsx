import React from "react";

const WomanCollection = (props) => {
  const { title} =props.ladiesFashion;
 
  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="bannerbox">
      <img src="assets/LadiesBanner.gif" alt="" />
      </div>
  
      <div className="menImages">
        <img src="assets/women/1.jpg" alt={title} />
        <img src="assets/women/2.jpg" alt={title} />
        <img src="assets/women/3.jpg" alt={title} />
        <img src="assets/women/4.jpg" alt={title} />
        <img src="assets/women/5.jpg" alt={title} />
        <img src="assets/women/6.jpg" alt={title} />
      </div>
    </div>
  );
};

export default WomanCollection;