import React from 'react';
import { Article } from '../../components';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      
      {/*Header Content At The Top Of This Section*/}
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A Lot Is Happening, We Are Blogging About It.</h1>
      </div>

      {/*First Blog To The Left*/}
      <div className='gpt__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article/>
        </div>

        {/*Four Other Blogs To The Right*/}
        <div className='gpt3__blog-container__groupB'>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>
    </div>
  )
}

export default Blog