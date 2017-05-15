import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ScoreInput from './ScoreInput'

class App extends Component {
  render () {
    return <Router>
      <div className='experiencedMain'>
        <header>
          <div className='experiencedIntro'>
            <h1>Let's get started on the Road to Regionals.  Enter your previous Open scores to see where we can help</h1>
          </div>
        </header>
        <Route path='/scores/:workout' component={ScoreInput} />
        <div className='socialMedia'>
          <a href='https://www.instagram.com/dannyoceanxo/'><img src='/images/instagram2.png' height='50px' width='50px' /></a>
          <a href='https://github.com/dannyoceanxo/'><img src='/images/waltercat.png' height='50px' width='50px' /></a>
          <a href='http://cigarcitycrossfit.com/'><img src='/images/cigarcity.png' height='50px' width='50px' /></a>
        </div>
        <footer>&copy; dannyoceanxo & Cigar City Crossfit, 2017</footer>
      </div>
    </Router>
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
