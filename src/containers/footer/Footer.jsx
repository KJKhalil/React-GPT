import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do You Want To Step In To The Future Before Others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <>Request Early Access</>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={logo} alt='logo'/>
          <p>5134 RandomStreet Rd, RandomState 11111</p>
        </div>
      </div>
    </div>
  )
}

export default Footer