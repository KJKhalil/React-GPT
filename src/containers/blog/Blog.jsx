/*This Page Is For The 'Library' Section*/
import React from 'react';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports.js';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      
      {/*Header Content At The Top Of This Section*/}
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A Lot Is Happening, We Are Blogging About It.</h1>
      </div>

      {/*First Blog And Its Content To The Left*/}
      <div className='gpt__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog1} date='April 23, 2024' title='GPT-3 and Open AI is the future. Let us explore it.'/>
        </div>

        {/*Four Other Blogs And Their Content To The Right*/}
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog2} date='April 23, 2024' title='GPT-3 and Open AI is the future. Let us explore it.'/>
          <Article imgUrl={blog3} date='April 23, 2024' title='GPT-3 and Open AI is the future. Let us explore it.'/>
          <Article imgUrl={blog4} date='April 23, 2024' title='GPT-3 and Open AI is the future. Let us explore it.'/>
          <Article imgUrl={blog5} date='April 23, 2024' title='GPT-3 and Open AI is the future. Let us explore it.'/>
        </div>
      </div>
    </div>
  )
}

export default Blog