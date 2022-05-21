import React from 'react';
import CovidCommercial from "./video/CovidCommercial.mp4";
const Videocovid = () => {
    return (
   <div className="video">
    <video autoPlay loop muted >
	<source src={CovidCommercial} type="video/mp4"/> 
    </video>
	</div>
    )}

export default Videocovid;