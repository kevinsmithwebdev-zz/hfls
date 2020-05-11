import React from 'react';

import './FrontCards.css';

const FrontCards = () => (
  <div id='FrontCards'>
    <div className='outer-wrapper outer-wrapper0'>
      <div className='inner-wrapper'>
        <h3>This program is suitable for your class if:</h3>
        <ul>
          <li>You are tired of gathering material from different books in order to teach.</li>
          <li>You want to teach Spanish as native Spanish speakers learn the language, introducing students to speaking and reading as a base to acquire a solid foundation.</li>
          <li>You want your students to play games, move, run, sing, eat, etc., and have fun while learning Spanish to keep them engage so they can pursuit a further education in the Spanish language.</li>
        </ul>
      </div>
    </div>

    <div className='outer-wrapper outer-wrapper1'>
      <div className='inner-wrapper'>
        <h3>Are you a Spanish teacher <i>with or without experience</i>, who wants to show your students that learning Spanish is fun?</h3>
        <h4 className='mainText'><b><i>Have Fun Learning Spanish</i></b> is a course designed for elementary school children with little or no previous exposure to the Spanish language and who are interested in learning Spanish in school.</h4>
      </div>
    </div>

    <div className='outer-wrapper outer-wrapper0'>
      <div className='inner-wrapper'>
        <h3>The series of books <i>Have Fun Learning Spanish</i> is the result of more than 15 years of teaching Spanish to elementary school children.</h3>
        <h4 className='mainText'>The books have been tested several times and the content of each book is the compilation of the student’s suggestions gathered throughout these years of teaching. This series is a work in progress and Roxana is constantly developing new textbooks, songs to reinforce what has been learned, bilingual stories, and online material for teachers and students.</h4>
      </div>
    </div>
  </div>
);

export default FrontCards;
