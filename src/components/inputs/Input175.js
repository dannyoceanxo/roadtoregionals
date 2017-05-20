import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Input175 extends Component {
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
          <textarea className='175Input' onSubmit='' placeholder='Input score here' />
        </div>
        <div className='forwardArrow'>
          <Link to={`/results/171`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input175
