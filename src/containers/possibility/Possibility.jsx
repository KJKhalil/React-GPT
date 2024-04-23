/*This .jsx Is For The 'Open AI' Section*/
import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>

        {/*Img In The Left Of The Section*/}
        <img src={possibilityImage} alt='possibility'/>
      </div>

      {/*The Content In The Right Of The Section*/}
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility