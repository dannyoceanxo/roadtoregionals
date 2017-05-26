import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from '../../store'

class Output173 extends Component {
  render () {
    return <div className='Output173'>
      <div className={`results-173 openScore`} >
        <div className={`173image`}>
          <img src={`/images/results173.png`} width='800px' height='450px' />
        </div>
        <div className='resultsAndTips'>
          <h2>17.3 was entirely based on strength under fatigue as well as Olympic lifting capability.  Here's a good way to improve your snatch cycling:</h2>
          <h4><a href='https://spark.adobe.com/page/4WHSyiXBYnlxl/'>"The Skill of Barbell Cycling" by Training Think Tank</a></h4>
          <div>{store.resultFor('173').result.split('\n').map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </div>
      <div className='resultsButtons'>
        <div className='backArrow'>
          <Link to={`/results/172`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/174`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Output173
