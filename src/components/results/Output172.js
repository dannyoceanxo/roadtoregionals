import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from '../../store'

class Output172 extends Component {
  render () {
    return <div className='Output172'>
      <div className={`results-172 openScore`} >
        <div className={`172image`}>
          <img src={`/images/results172.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <div className='yourMin172'>
            <h2>Your score: 150 reps</h2>
            <h2>Minimum score needed to make it to Regionals: 190 reps</h2>
          </div>
          <div className='training172'>
            <h3>17.2 was largely based on your ability to pace yourself as well as do gymnastic movements while fatigued.  Here's a test workout for a similar timeframe:</h3>
            <h4>Cindy: 20 min AMRAP</h4>
            <h4>5 pull-ups</h4>
            <h4>10 push-ups</h4>
            <h4>15 squats</h4>
          </div>
          <div>{store.resultFor('172').result.split('\n').map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/171`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/173`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Output172
