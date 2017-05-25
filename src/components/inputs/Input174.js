import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store'

@observer
class Input174 extends Component {
  _change = (event) => {
    store.inputs['174'] = event.target.value
  }
  render () {
    return <div className='openScoresInput'>
      <div className={`score-174 openScore`} >
        <div className={`174image`}>
          <img src={`/images/open174.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/scores/173`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='174textBox'>
          <textarea className='174Input' onSubmit='' placeholder='Input score here' value={store.inputs['174']} onChange={this._change} />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/175`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input174
