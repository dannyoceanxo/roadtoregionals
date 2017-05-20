import React, { Component } from 'react'
import Input171 from './inputs/Input171'
import Input172 from './inputs/Input172'
import Input173 from './inputs/Input173'
import Input174 from './inputs/Input174'
import Input175 from './inputs/Input175'

const inputs = {
  '171': Input171,
  '172': Input172,
  '173': Input173,
  '174': Input174,
  '175': Input175
}

class ScoreInput extends Component {
  render () {
    const wo = this.props.match.params.workout

    return <div className='experiencedMain'>
      <header>
        <div className='experiencedIntro'>
          <h1>Let's get started on the Road to Regionals.  Enter your previous Open scores to see where we can help</h1>
        </div>
      </header>
      {React.createElement(inputs[wo])}
    </div>
  }
}

export default ScoreInput
