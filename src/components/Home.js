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
        <img src='/images/crossfitlogo.png' width='400px' />
        <img src='/images/gameslogo.svg' />
      </div>
    </div>
  }
}

export default Home
