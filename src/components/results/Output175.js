import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import store from '../../store'

class Output175 extends Component {
  render () {
    if (store.resultFor('175')) {
      return <div className='Output175'>
        <div className={`results-175 openScore`} >
          <div className={`175image`}>
            <img src={`/images/results175.png`} width='800px' height='450px' />
          </div>
          <div className='resultsAndTips'>
            <div className='rat175'>
              <h2>17.5 was about pacing.  Come out too hot and you'll be in a heap on the ground before you know it.  Here's a good test workout for your pacing:</h2>
            </div>
            <div className='training175'>
              <h4>DT: 5 RFT</h4>
              <h4>12 deadlifts</h4>
              <h4>9 hang power cleans</h4>
              <h4>6 shoulder to overhead</h4>
              <h4>155/105</h4>
            </div>
            <div>{store.resultFor('175').result.split('\n').map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
        </div>
        <div className='resultsButtons'>
          <div className='backArrow'>
            <Link to={`/results/174`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
          </div>
          <div className='forwardArrow'>
            <Link to={`/finalpage`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
          </div>
        </div>
      </div>
    } else {
      return <Redirect to='/error' />
    }
  }
}

export default Output175
