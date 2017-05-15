import React, { Component } from 'react'

class Novice extends Component {
  render () {
    return <div className='novicemain'>
      <div className='noviceIntro'>
        <h1>Never done CrossFit before?  Here are some good resources to get you started</h1>
      </div>
      <div className='cf813'>
        <a href='http://crossfit813.com'><img src='/images/cf813.jpg' height='205px' width='215px' border-radius='2em' /></a>
      </div>
      <div className='cigarLogo'>
        <a href='http://cigarcitycrossfit.com'><img src='/images/cigarcity.png' height='205px' width='215px' /></a>
      </div>
      <div className='mobility'>
        <h2>Here's are some great places to work on your mobility.   Jamie's hip-hop flow class will rock your world</h2>
        <div className='camp'>
          <a href='http://camptampa.com'><img src='/images/camp.png' /></a>
        </div>
        <div className='bellaprana'>
          <a href='bellaprana.com'><img src='images/bellaprana.png' /></a>
        </div>
      </div>
      <footer>&copy; dannyoceanxo & Cigar City Crossfit, 2017</footer>
    </div>
  }
  }

export default Novice
