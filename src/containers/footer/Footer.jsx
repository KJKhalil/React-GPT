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

        {/*First 3 Links On The Left Href Can Be Added*/}
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>CompanyLinkedin</p>
          <p>CompanyFacebook</p>
          <p>CompanyTwitter</p>
        </div>

        {/*Second 3 Links In The Middle Href Can Be Added*/}
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        {/*Last 3 Links On The Right Href Can Be Added*/}
        <div className='gpt3__footer-links__div'>
          <h4>Contact Us</h4>
          <p>555-555-5555</p>
          <p>CompanyCustomerServiceEmail</p>
          <p>5134 RandomStreet Rd, RandomState 11111</p>
        </div>

        <div className='gpt3__footer-copyright'>
          <p>© 2024 GPT-3. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer