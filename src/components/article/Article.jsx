import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container__article'>
      
      {/*Imported To Blog.jsx. For The Images In The Library Section*/}
      <div className='gpt3__blog-container__article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>

      {/*Imported To Blog.jsx. For The Content In The Library Section*/}
      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article