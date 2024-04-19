import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
          
        {/*Header Title And The Text Under It*/}
        <h1 className='gradient__text'>Let’s Build Something Amazing With GPT-3 OpenAI</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          
        {/*Input Box For The Users Email And The Button To Start The Process*/}
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        {/*The Image Showing Recent Visitors And The Text Under It*/}
        <div className='gpt3__header-content_people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours.</p>
        </div>
      </div>

      {/*The Image In The Top Right Of The Page*/}
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header