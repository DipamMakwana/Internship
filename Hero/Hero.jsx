import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import Hero_video from '../Assets/Hero_video.mp4'

const Hero = () => {
  return (
    <div className='hero'>

       {/* <div classNameName="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div classNameName="hero-hand-icon">
                     <p>new</p>
                     <img src={hand_icon} alt="" />

                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div classNameName="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div> */}
        <div className="hero-right">
            <video src={Hero_video} autoPlay loop muted />
           
        </div>

    </div>
  )
}

export default Hero

