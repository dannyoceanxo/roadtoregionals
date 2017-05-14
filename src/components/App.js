import React, { Component } from 'react'

class App extends Component {
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

// class App extends Component {
//  render () {
//    return <div>
//      <div className='introtext'>
//        <h1>So you want to make Regionals?</h1>
//      </div>
//      <div className='experiencedAthlete'>
//        <p>Experienced CrossFit athlete?  Start here to input your past Open scores</p>
//        <div className='gamesLogo'>
//          <img src='/images/gameslogo.svg' />
//        </div>
//        <div className='experiencedButton'>
//          <button className='experiencedButton' onClick=''>Click here</button>
//        </div>
//      </div>
//      <div className='noviceAthlete'>
//        <p>New to CrossFit?  Check out these resources to get started</p>
//        <div className='cfLogo'>
//          <img src='/images/crossfitlogo.png' />
//        </div>
//        <div className='noviceSelection'>
//          <button className='noviceButton' onClick=''>Click here</button>
//        </div>
//      </div>
//      <div className='cigarLogo'>
//        <a href='http://cigarcitycrossfit.com'><img src='/images/cigarcity.png' height='205px' width='215px' /></a>
//      </div>
//      <footer>
//        <h5>&copy; Cigar City CrossFit & @dannyoceanxo, 2017</h5>
//      </footer>
//    </div>
//  }
// }

export default App
