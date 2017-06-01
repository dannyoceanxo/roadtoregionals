import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return <div>
      <div className='homeIntroText'>
        <h1>So you want to make Regionals?</h1>
      </div>
      <div className='experiencedAthlete'>
        <h1>Experienced CrossFit athlete?  Start here to input your past Open scores</h1>
        <Link to='/scores/171' className='experiencedButton' >Click here</Link>
      </div>
      <div className='noviceAthlete'>
        <h3>New to CrossFit?  Check out these resources to get started</h3>
        <Link to='/novice' className='noviceButton'>Click here</Link>
      </div>
      <div className='homePhotos'>
        <a href='https://www.crossfit.com/'><img src='/images/crossfitlogo.png' width='400px' /></a>
        <a href='https://games.crossfit.com/'><img src='/images/gameslogo.svg' /></a>
      </div>
    </div>
  }
}

export default Home
