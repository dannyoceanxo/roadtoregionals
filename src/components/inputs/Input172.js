import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input172 extends Component {
  _change = (event) => {
    store.inputs['172'] = event.target.value
  }
  render () {
    return <div className='openScoresInput'>
      <div className={`score-172 openScore`} >
        <div className={`172image`}>
          <img src={`/images/open172.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/scores/171`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='172textBox'>
          <textarea className='172Input' onSubmit='' placeholder='225' value={store.inputs['172']} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/173`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input172
