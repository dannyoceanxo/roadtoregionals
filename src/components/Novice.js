import React, { Component } from 'react'

class Novice extends Component {
  render () {
    return <div className='novicemain'>
      <div className='noviceIntro'>
        <h1>New to CrossFit?  Here are some good resources to get you started</h1>
      </div>
      <div className='noviceResources'>
        <div className='cf813'>
          <a href='http://crossfit813.com'><img src='/images/cf813.jpg' height='205px' width='215px' border-radius='2em' /></a>
          <p>Words about 813 </p>
        </div>
        <div className='cigarLogo'>
          <a href='http://cigarcitycrossfit.com'><img src='/images/cigarcity.png' height='205px' width='215px' /></a>
          <p>Words about CCCF </p>
        </div>
        <div className='camp'>
          <a href='http://camptampa.com'><img src='/images/camp.png' height='205px' width='215px' /></a>
          <p>Words about Camp</p>
        </div>
        <div className='nutrition'>
          <a href='http://cigarcitycrossfit.com/services/nutrition-planning'><img src='/images/mealplan.jpg' height='205px' /></a>
          <p>Words about nutrition</p>
        </div>
      </div>
      <div className='whatIsCrossfit'>
        <iframe src='https://www.youtube.com/embed/mlVrkiCoKkg' />
      </div>
    </div>
  }
  }

export default Novice
