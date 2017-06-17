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
          <p>Established in 2011, CrossFit 813 is the largest gym in the Tampa area.  If you're looking for a competitive environment, this is the place to go.</p>
        </div>
        {/* <div className='cigarLogo'>
          <a href='http://cigarcitycrossfit.com'><img src='/images/cigarcity.png' height='205px' width='215px' /></a>
          <p>Opened in April 2016, Cigar City CrossFit is the brainchild of Mike Verdi, a former programmer, and Benjamin Bunn, and former Green Beret.  At 15,000 sq. feet it's one of the largest gyms in the southeast and is perfect for someone starting their fitness journey.</p>
        </div> */}
        <div className='camp'>
          <a href='http://camptampa.com'><img src='/images/camp.png' height='205px' width='215px' /></a>
          <p>Mobility is your friend.  Come in here on your off days to get a stretch and some variation from training.</p>
        </div>
        <div className='nutrition'>
          <a href='http://macrotrack.colinfendrick.surge.sh/'><img src='/images/mealplan.jpg' height='205px' /></a>
          <p>The foundation of good fitness, nutrition is an oft-overlooked piece of the puzzle.  Fellow Iron Yard alumnus Colin Fendrick has created an excellent app for tracking macronutrients so you can find out what works for you.</p>
        </div>
      </div>
      <div className='whatIsCrossfit'>
        <iframe src='https://www.youtube.com/embed/mlVrkiCoKkg' />
        <iframe src='https://www.youtube.com/embed/Nz_wcB0lYTs' />
      </div>
    </div>
  }
  }

export default Novice
