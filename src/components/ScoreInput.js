import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ScoreInput extends Component {
  render () {
    const wo = this.props.match.params.workout

    return <div className='openScoresInput'>
      <div className={`score-${wo} openScore`} >
        <div className={`${wo}image`}>
          <img src={`/images/open${wo}.png`} width='800px' height='450px' />
        </div>
      </div>
      <div className='workoutButtons'>
        <div className='backArrow'>
          <Link to={`/scores/${parseInt(wo) - 1}`} className='backButton'><i className='fa fa-chevron-left' aria-hidden='true' /></Link>
        </div>
        <div className='171textBox'>
          <textarea className='171Input' onSubmit='' placeholder='Input score here' />
        </div>
        <div className='forwardArrow'>
          <Link to={`/scores/${parseInt(wo) + 1}`} className='forwardButton'><i className='fa fa-chevron-right' aria-hidden='true' /></Link>
        </div>
      </div>
    </div>
  }
}

export default ScoreInput
