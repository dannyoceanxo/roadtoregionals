import React, { Component } from 'react'

class Experienced extends Component {
  render () {
    return <div>
      <div className='introtext'>
        <h1>So you want to make Regionals?</h1>
      </div>
      <div className='experiencedAthlete'>
        <p>Experienced CrossFit athlete?  Start here to input your past Open scores</p>
        <img src='/images/gameslogo.svg' />
        <div className='experiencedButton'>
          <button className='experiencedButton' onClick=''>Click here</button>
        </div>
      </div>
      <div className='noviceAthlete'>
        <p>New to CrossFit?  Check out these resources to get started</p>
        <img src='/images/crossfitlogo.png' />
        <div className='noviceSelection'>
          <button className='noviceButton' onClick=''>Click here</button>
        </div>
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

export default Experienced
