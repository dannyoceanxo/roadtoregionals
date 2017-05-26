import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from '../../store'

class Output174 extends Component {
  render () {
    return <div className='Output174'>
      <div className={`results-174 openScore`} >
        <div className={`174image`}>
          <img src={`/images/results174.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <h2>As a repeat workout, 17.4 was a great opportunity to see your progress over the course of the year.</h2>
          <h4><a href='https://spark.adobe.com/page/SlAQbbi4QLoEL/'>Here's an article on making sure your competitiveness isn't getting in the way of your progress</a></h4>
          <div>{store.resultFor('174').result.split('\n').map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/173`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/175`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Output174
