import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ScoreInput from './ScoreInput'

class ExperiencedResults extends Component {
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

export default ExperiencedResults
