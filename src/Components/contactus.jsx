import React from 'react'
import './contactus.css';
import IMAGES from '../Assets/img';

export default function Contactus() {
  return (
    <div className="contactus">
    <nav className="navbar navbar-light bg-light">
        
  <a className="navbar-brand" href="#">Reach out to us!!</a>
</nav>
<h2 className="head">THE HOTEL GRAND, NEW DELHI - BEST 5-STAR HOTEL NEAR DELHI AIRPORT</h2>

 <div className="rowS">
    <div className="colS">
      <img src={IMAGES.pic15} alt=""  width={"600"} height={"400"}/>
    </div>
    <div class="colA">
    Nelson Mandela Road, Vasant Kunj - Phase II <br />
    New Delhi 110 070, India | Map <br />
    Email: reservation@thegrandnewdelhi.com <br />
    Phone: +91 11 4766 1200
    </div>
    </div>
    <br/>
    <div >
      <img src={IMAGES.pic15} alt=""  width={"600"} height={"400"}/>
    </div>
</div>
    

  )
}
