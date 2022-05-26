import React from 'react'
import './contentp.css'
import IMAGES from '../../Assets/img.js';
import Footer from '../footer';
import Videocovid from "../covidvideo"
const Content = () => {
  return (
    <>
    <Videocovid />
    <div className="cont">
          <div className="logo">
              <h1>THE HOTEL GRAND</h1>
              #YourSafety&HealthIsOurPriority
          </div>
          <br />
          <br />
          <div className="content">
              <p>The Grand New Delhi, nestled in the heart of Delhi NCR, is the city's most distinguished luxury hotel.
                  An ideal destination for the discerning business and leisure traveller, this 5 Star business hotel in Delhi, boasts modern facilities and a resort-like feel with its luscious greens & magnificent waterscape.</p>
              <p>When you visit the capital of India, you will witness the glory of Indian history in its magnificent monuments and beautiful parks.
                  Be it Akshardham, a spiritual-cultural campus to the devotional experience of Nizamuddin Dargah, or be it the beautiful gardens, or the Red Fort that reminds us of the last phase of the Mughal Empire.
                  These tourist attractions can be conveniently reached from our 5 Star hotel in New Delhi.</p>
              <p>Our 5-star hotel in Delhi is approximately 9 km from the Indira Gandhi International Airport and within close proximity to the major travel hubs of Delhi. It is also very close to DLF Promenade and many popular shopping destinations such as DLF Emporio, Ambience Mall, and Diplomatic Enclave.</p>

          </div><br />
          {/* <Footer/> */}
      </div></>
  )
}

export default Content
