import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input173 extends Component {
  _change = (event) => {
    store.inputs['173'][event.target.name] = event.target.value
  }
  render () {
    return <div className='openScoresInput'>
      <div className={`score-173 openScore`} >
        <div className={`173image`}>
          <img src={`/images/open173.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/scores/172`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='173textBox'>
          <textarea className='173Input' name='reps' placeholder='216' value={store.inputs['173'].reps} onChange={this._change} />
          <textarea className='173Input2' name='time' placeholder='24:00' value={store.inputs['173'].time} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/174`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input173
