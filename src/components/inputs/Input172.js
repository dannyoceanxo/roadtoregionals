import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Input172 extends Component {
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
          <textarea className='172Input' onSubmit='' placeholder='Input score here' />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/173`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input172
