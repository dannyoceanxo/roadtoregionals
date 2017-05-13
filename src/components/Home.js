import React, { Component } from 'react'

class Home extends Component {
  render () {
    return <div>
      <div className='introtext'>
        <h1>So you want to make Regionals?</h1>
      </div>
      <div className='experiencedAthlete'>
        <p>Experienced CrossFit athlete?  Start here to input your past Open scores</p>
        <button className='experiencedButton' onClick=''>Click here</button>
      </div>
      <div className='noviceAthlete'>
        <p>New to CrossFit?  Check out these resources to get started</p>
        <button className='noviceButton' onClick=''>Click here</button>
      </div>
      <div className='homePhotos'>
        <img src='/images/crossfitlogo.png' width='400px' />
        <img src='/images/gameslogo.svg' />
      </div>
      <div className='cigarLogo'>
        <a href='http://cigarcitycrossfit.com'><img src='/images/cigarcity.png' height='205px' width='215px' /></a>
      </div>
      <footer>
        <h5>&copy; Cigar City CrossFit & @dannyoceanxo, 2017</h5>
      </footer>
    </div>
  }
}

export default Home
