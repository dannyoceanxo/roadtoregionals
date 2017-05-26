import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import store from '../../store'

class Output171 extends Component {
  render () {
    if (store.resultFor('175')) {
      return <div className='Output171'>
        <div className={`results-171 openScore`} >
          <div className={`171image`}>
            <img src={`/images/results171.png`} width='800px' height='450px' />
          </div>
          <div className='resultsAndTips'>
            <h2>Your score: {store.scoreFor('171')}</h2>
            <h2>Minimum score needed to make it to Regionals: 10:17</h2>
            <h3>Since 17.1 was entirely aerobic capacity, here is an example workout to build a base and test yourself in a month:</h3>
            <h4>60 min AMRAP</h4>
            <h4>Run 400m</h4>
            <h4>Row 1000m</h4>
            <h4><a href='https://spark.adobe.com/page/DYpTj4ZH9q2zI/'>Here's a great article on building an engine from the guys at Training Think Tank</a></h4>
            <div>{store.resultFor('171').result.split('\n').map((p, i) => <p key={i}>{p}</p>)}</div>
            {/* <h2>Your score: 150 reps</h2>
          <h2>Minimum score needed to make it to Regionals: 190 reps</h2>
          <h3>17.2 was largely based on your ability to pace yourself as well as do gymnastic movements while fatigued.  Here's a test workout for a similar timeframe:</h3>
          <h4>Cindy: 20 min AMRAP</h4>
          <h4>5 pull-ups</h4>
          <h4>10 push-ups</h4>
          <h4>15 squats</h4>
          <h2>17.3 was entirely based on strength under fatigue as well as Olympic lifting capability.  Here's a good way to improve your snatch cycling:</h2>
          <h4><a href='https://spark.adobe.com/page/4WHSyiXBYnlxl/'>"The Skill of Barbell Cycling" by Training Think Tank</a></h4>
          <h2>As a repeat workout, 17.4 was a great opportunity to see your progress over the course of the year.</h2>
          <h4><a href='https://spark.adobe.com/page/SlAQbbi4QLoEL/'>Here's an article on making sure your competitiveness isn't getting in the way of your progress</a></h4>
          <h2>17.5 was about pacing.  Come out too hot and you'll be in a heap on the ground before you know it.  Here's a good test workout for your pacing:</h2>
          <h4>DT: 5 RFT</h4>
          <h4>12 deadlifts</h4>
          <h4>9 hang power cleans</h4>
          <h4>6 shoulder to overhead</h4>
          <h4>155/105</h4> */}
          </div>
        </div>
        <div className='resultsButtons'>
          <div className='backArrow'>
            <Link to={`/scores/175`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
          </div>
          <div className='forwardArrow'>
            <Link to={`/results/172`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
          </div>
        </div>
      </div>
    } else {
      return <Redirect to='/error' />
    }
  }
}

export default Output171
