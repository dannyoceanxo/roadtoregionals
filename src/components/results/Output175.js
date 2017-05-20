import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Output175 extends Component {
  render () {
    return <div className='Output175'>
      <div className={`results-175 openScore`} >
        <div className={`175image`}>
          <img src={`/images/results175.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <h2>17.5 was about pacing.  Come out too hot and you'll be in a heap on the ground before you know it.  Here's a good test workout for your pacing:</h2>
          <h4>DT: 5 RFT</h4>
          <h4>12 deadlifts</h4>
          <h4>9 hang power cleans</h4>
          <h4>6 shoulder to overhead</h4>
          <h4>155/105</h4>
        </div>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/174`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/171`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Output175
