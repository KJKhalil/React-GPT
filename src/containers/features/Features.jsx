/*This .jsx Is For The 'Case Studies' Section*/
import React from 'react';
import { Feature } from '../../components';
import './features.css';

/*This const Is The Content That Goes Into gpt3__features-container*/
const featuresData = [
  {
    title:'Improving End Distrusts Instantly ',
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },

  {
    title:'Become The Tended Active',
    text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },

  {
    title:'Message Or Am Nothing',
    text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },

  {
    title:'Really Boy Law County',
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        
        {/*Content On The Left Of Section*/}
        <h1 className='gradient__text'>The Future Is Now And You Just Need To Realize It. Step Into Future Today & Make It Happen.</h1>
        <p>Request Early Access To Get Started</p>
      </div>

      {/* Uses The Feature Import For title And text. Puts The Content In The Container From const featuresData*/}
      <div className='gpt3__features-container'>
        {featuresData.map(( item, index ) => (
          <Feature title={ item.title } text={ item.text } key={ item.title + index }/>
        ))}
      </div>      
    </div>
  )
}

export default Features