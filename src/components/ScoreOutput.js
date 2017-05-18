import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ScoreOutput extends Component {
  render () {
    const improvement = this.props.match.params.improvements
    return <div className='openScoresOutput'>
      <div className='experiencedResultsIntro'>
        <h1>Let's go over your scores</h1>
      </div>
      <div className={`results-${improvement} openScore`} >
        <div className={`${improvement}image`}>
          <img src={`/images/results${improvement}.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <h2>Your score: scoreAttained</h2>
          <h2>Minimum score needed to make it to Regionals: scoreNeeded</h2>
          <h3>Since 17.1 was entirely aerobic capacity, here is an example workout to build a base and test yourself in a month:</h3>
          <h4>60 min AMRAP</h4>
          <h4>Run 400m</h4>
          <h4>Row 1000m</h4>
          <h4><a href='https://spark.adobe.com/page/DYpTj4ZH9q2zI/'>Here's a great article on building an engine from the guys at Training Think Tank</a></h4>
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
