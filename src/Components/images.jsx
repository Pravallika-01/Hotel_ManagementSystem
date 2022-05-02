import React from 'react'
import './images.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from './footer';

const Images  = () => {
    return(
        <div className='images'>
            <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src=  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c2/9c/80/the-claridges-new-delhi.jpg?w=1000&h=600&s=1" className="sliderimg"/>
      <img src= "https://www.itchotels.com/content/dam/itchotels/in/umbrella/miscellaneous-pages/itc-hotels-boutique/images/home-page/desktop/itchotels-boutique.jpg"  className="sliderimg"/>
      <img src= "https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg"  className="sliderimg"/>
      <img src= "https://www.raffles.com/assets/0/72/76/103/1798/c257e3d5-724f-49a2-bd25-c389c7864794.jpg"  className="sliderimg"/>
</AliceCarousel>
        </div>

    );
}
export default Images