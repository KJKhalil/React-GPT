import React from 'react';
import './feature.css';

/*Handles The Export Of Content In WhatGPT3.jsx. The Content Itself Is In WhatGPT3.jsx*/
const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>  
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature