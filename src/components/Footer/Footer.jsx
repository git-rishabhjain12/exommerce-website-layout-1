import React from 'react'
import './Footer.scss'
// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
// import Payment from '../../assets/payments.png'
const Footer = () => {
  return (
    <Footer className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>About</div>
          <div className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolor consequuntur dolore nesciunt nobis eius soluta impedit. Fugit
            soluta magnam porro facere repudiandae deleniti, at animi.
            Voluptatem temporibus quidem expedita.
          </div>
        </div>
        <div className='col'>
          <div className='title'>Contact</div>
        </div>
        <div className='col'>
          <div className='title'>Categories</div>
        </div>
        <div className='col'>
          <div className='title'>Pages</div>
        </div>
      </div>
    </Footer>
  )
}

export default Footer
