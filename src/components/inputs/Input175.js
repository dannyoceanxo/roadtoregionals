import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input175 extends Component {
  _change = (event) => {
    store.inputs['175'] = event.target.value
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
          <Link to={`/`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='175textBox'>
          <textarea className='175Input' onSubmit='' placeholder='Input score here' value={store.inputs['175']} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/171`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input175
