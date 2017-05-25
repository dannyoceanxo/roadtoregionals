import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input171 extends Component {
  _change = (event) => {
    store.inputs['171'][event.target.name] = event.target.value
  }
  render () {
    return <div className='openScoresInput'>
      <div className={`score-171 openScore`} >
        <div className={`171image`}>
          <img src={`/images/open171.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='171textBox'>
          <input type='number' className='171Input' name='reps' placeholder='225' value={store.inputs['171'].reps} onChange={this._change} />
          <input type='string' className='171Input2' name='time' placeholder='20:00' value={store.inputs['171'].time} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/172`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input171
