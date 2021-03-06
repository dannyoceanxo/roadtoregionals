import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input175 extends Component {
  _change = (event) => {
    store.inputs['175'][event.target.name] = event.target.value
  }
  render () {
    return <div className='openScoresInput'>
      <div className={`score-175 openScore`} >
        <div className={`175image`}>
          <img src={`/images/open175.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/scores/174`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='175textBox'>
          <input type='number' className='175Input' name='reps' placeholder='440' value={store.inputs['175'].reps} onChange={this._change} />
          <input type='string' className='175Input2' name='time' placeholder='40:00' value={store.inputs['175'].time} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/171`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input175
