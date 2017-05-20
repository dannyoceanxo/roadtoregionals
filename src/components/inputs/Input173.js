import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Input173 extends Component {
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
          <textarea className='173Input' onSubmit='' placeholder='Input score here' />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/174`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input173
