import React from 'react'
import './contentp.css'
import IMAGES from '../../Assets/img.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from '../footer';
import Videocovid from "../covidvideo"
const Content = () => {
  return (
    <>
    <div className='vcss'>
    <Videocovid />
    </div>
    <div className="cont">
        <div className='cont2'>
          <div className="logo">
              <br></br>
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

          </div><br /><div>
              </div>
              </div>
          <div className='images'>
            <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src=  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c2/9c/80/the-claridges-new-delhi.jpg?w=1000&h=600&s=1" className="sliderimg"/>
      <img src= "https://media.istockphoto.com/photos/digitally-rendered-image-of-a-fivestar-hotel-interior-picture-id1333257950?b=1&k=20&m=1333257950&s=170667a&w=0&h=T8H8O-k_znwhUyBtdH_aiwHUPG62DhH6XLbrv9AkXUY="  className="sliderimg"/>
      <img src= "https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/2022/0523/T0523ParadiseCove_C_HR/Small-Luxury-Hotels-expands-its-Considerate-Collec.jpg?tr=w-780%2Ch-440%2Cfo-auto"  className="sliderimg"/>
      <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c2/9c/80/the-claridges-new-delhi.jpg?w=1000&h=600&s=1"  className="sliderimg"/>
</AliceCarousel>
  {/* <Footer/> */}
        </div>
      </div></>
  )
}

export default Content
