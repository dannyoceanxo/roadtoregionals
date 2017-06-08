import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FinalPage extends Component {
  render () {
    return <div className='finalPage'>
      <header>Interested in learning more?</header>
      <div className='finalTTT'>
        <a href='https://www.trainingthinktank.com/'><img src={'/images/tttlogo.png'} width='400px' height='225px' /></a>
        <h2>Started by Max El Hag, a former OPEX Fitness coach, Training Think Tank has quickly established themselves as on of the premier remote coaching facilities in the CrossFit world.  Current athletes include Aaron Hanna, Travis Mayer, Brad Salemi, and Noah Ohlsen</h2>
      </div>
      <div className='finalOPEX'>
        <a href='http://opexfit.com/'><img src='/images/opexlogo.png' width='400px' height='225px' /></a>
        <h2>One of the original remote coaching facilities, OPEX Fitness was started in 1999 by James "OPT" Fitzgerald.  Current athletes include Marcus Filly, Lindsay Marshall, Danny Shenker, and Kevin Schuetz</h2>
      </div>
      <div className='finalPageStandards'>
        <img src='/images/standardslist.PNG' width='300px' height='500px' />
        <h2>Here's an excellent list of standards one should be able to meet before considering competitor's training or an individual design.  You need to walk before you can run!</h2>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/175`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        {/* <div className='forwardArrow'>
          <Link to={`/finalpage`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div> */}
      </div>
    </div>
  }
}

export default FinalPage
