import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ScoreOutput extends Component {
  render () {
    const improvement = this.props.match.params.improvements
    return <div className='openScoresOutput'>
      <div className='experiencedResultsIntro'>
        <h1>Now that we know where you're at, here are some tips</h1>
      </div>
      <div className={`results-${improvement} openScore`} >
        <div className={`${improvement}image`}>
          <img src={`/images/results${improvement}.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <h1>17.1 was a test of pure aerobic capacity.  In order to improve that, you'll need to build a solid aerobic base.  Here's an example test workout to help with that</h1>
          <h2>60 minute AMRAP</h2>
          <h3>Run 400m</h3>
          <h3>Row 1000</h3>
        </div>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/${parseInt(improvement) - 1}`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/${parseInt(improvement) + 1}`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default ScoreOutput
