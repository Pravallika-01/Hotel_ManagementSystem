import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
		<div class="logo">
			<p>Grand Hotel</p>
		</div>
		<ul>
			
			<li><Link to="">Rooms</Link></li>
			<li><Link to="">Location</Link></li>
			<li><Link to="/contacts">contact us</Link></li>
			<li class="nav-item"><Link class="nav-link" to="/registration">Login/Registration</Link>
			  </li>
		</ul>
	</nav>
    </div>
  )
}

export default Header
