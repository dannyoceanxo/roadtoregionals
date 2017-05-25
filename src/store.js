import { observable } from 'mobx'
// import results from './results.json'

class Store {
  @observable inputs = {
    '171': {
      max: '225',
      reps: '',
      time: ''
    },
    '172': '',
    '173': {
      max: '216',
      reps: '',
      time: ''
    },
    '174': '',
    '175': ''
  }

  scoreFor (workout) {
    const input = this.inputs[workout]
    if (typeof input === 'string') {
      return input
    } else {
      if (input.reps === '' || input.reps === input.max) {
        return input.time
      } else {
        return input.reps + ' reps'
      }
    }
  }

  resultFor (workout) {
    const data = results[workout]
    const score = this.scoreFor(workout)
  }
 }

const store = new Store()
export default store
