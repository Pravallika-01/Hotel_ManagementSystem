import React from 'react'
import './registration.css';
import './Event.css';
import Footer from './footer';
import IMAGES from '../Assets/img.js';
export default function Event() {
  return (
    <div>
      <>
      
      <div className="event">
      <h1>Fabulous Events & Weddings at our Banquet Halls</h1>

      </div>
      <div className="container my-8">
        <br />
        <p>
        With over 30,000 square feet of versatile banquet halls for meetings,
         events and weddings in Vasant Kunj, our Delhi airport hotel offers a perfect conference venue and 
        is an ideal place for wedding planners, meeting planners or corporates who are seeking a seamless experience. With our state-of-the-art technology, infrastructure,
        meeting concierge along with dedicated event services to
         ensure the success of every event.</p> 
       <p>Our professional event planners and catering team, specialized menus and exotic décor and wired audio-visual technology promise to exceed your every expectation 
        with unsurpassed comfort and refined opulence.Grand Hotel is known to be a much sought after convention hotel for hosting conferences, meetings and 
        upscale events in Delhi, offering space ranging from the Grand Ballroom, the largest pillar-less banqueting facilities in the city, to 2 boardrooms and 3 conference 
        rooms for conferences and meetings and sprawling outdoor spaces for social events, exhibitions and gala celebrations.
        </p>
      </div>
     
      

 {/* row 1 */}
 <div className='box'>
 <div class="container">
  <div class="row">
    <div class="col">
      <img src={IMAGES.pic9}alt=""  width={"345"} height={"208"}/>
      <br />
      <span class="tex">
      A 540 square feet multi-purpose banquet hall in Vasant Kunj,
       The Emerald, can be modified to be a perfect venue for  
       events of about 50 people.
      </span>
      <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
    </div>
    <div class="col">
    <img src={IMAGES.pic10}alt="" width={"345"} height={"208"} />  
    <br />
    
    <span class="tex">
    Exuding sheer luxury, the 6,500 square feet pillar-less ballroom
     is known to host a diverse range of functions and corporate events.
     </span>
     <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
      </div>
    <div class="col">
    <img src={IMAGES.pic11}alt=""  width={"345"} height={"208"}/>  
    <br />
    <span class="tex">
    We, at Grand Hotel, stand shoulder-to-shoulder 
    with you at all your events to make it a grand success and memorable.
     </span>
     <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
      </div>
  </div>
</div>
{/* row 2 */}
<div class="container">
  <div class="row">
    <div class="col">
      <img src={IMAGES.pic12}alt="" width={"345"} height={"208"}/>
      <br />
      <span class="tex">
      The Drawing room is perfect for small private meetings. It is fully served
       and comes with a floor space of 400 square feet, and comfortable couches.
     </span>
     <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
    </div>
    <div class="col">
    <img src={IMAGES.pic13}alt="" width={"345"} height={"208"}/>  
    <br /> 
    <span class="tex">
    The Board Room at Grand Hotel has been designed keeping in
     mind the needs of a modern day business meeting.
     </span>
     <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
     </div>
    <div class="col">
    <img src={IMAGES.pic14}alt="" width={"345"} height={"208"}/>  
    <br /> 
    <span class="tex">
    Beautifully landscaped garden, The Cascade
     Top Garden, is ideal for cocktail receptions or outdoor events.
     </span>
     <br />
     <div className='but'>
     <button type="button" class="btn btn-info" >More Info</button>
     </div>
     </div>
  </div>
</div>
</div>

      
      
    
    </>
    </div>
    
  )
}
