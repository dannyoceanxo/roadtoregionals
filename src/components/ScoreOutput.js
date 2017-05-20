import React, { Component } from 'react'
import Output171 from './results/Output171'
import Output172 from './results/Output172'
import Output173 from './results/Output173'
import Output174 from './results/Output174'
import Output175 from './results/Output175'

const outputs = {
  '171': Output171,
  '172': Output172,
  '173': Output173,
  '174': Output174,
  '175': Output175
}
class ScoreOutput extends Component {
  render () {
    const improvement = this.props.match.params.improvements
    return <div className='openScoresOutput'>
      <div className='experiencedResultsIntro'>
        <h1>Let's go over your scores</h1>
      </div>
      {React.createElement(outputs[improvement])}
    </div>
  }
}

export default ScoreOutput
