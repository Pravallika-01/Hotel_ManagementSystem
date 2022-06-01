import React from 'react';
import './header.css';
 import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav>
		<div class="logo">
			<p>Grand Hotel</p>
		</div>
		<ul>
		    <li><Link to="">Home</Link></li>
			<li><Link to="/Rooms">Rooms</Link></li>
			<li><Link to="/Event">Events</Link></li>
			<li><Link to="/contacts">contact us</Link></li>
			<li class="nav-item"><Link class="nav-link" to="/registration">Login/Registration</Link>
			  </li>
			  <button type="button" class="btn btn-warning btn-sm">Book Now</button>
		</ul>
	</nav>
	
    </div>
  )
}

export default Header
