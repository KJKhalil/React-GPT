import React from 'react';
import './article.css';

const Article = ({ imgUrl }) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imgUrl} alt='blogImg'/>
      </div>
    </div>
  )
}

export default Article