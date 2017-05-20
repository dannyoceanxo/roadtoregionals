import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Input171 extends Component {
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
          <textarea className='171Input' onSubmit='' placeholder='Input score here' />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/172`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default Input171
