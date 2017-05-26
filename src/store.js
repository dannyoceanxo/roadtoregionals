import { observable } from 'mobx'
import results from './results.json'

class Store {
  @observable inputs = {
    '171': {
      cap: '20:00',
      max: '225',
      reps: '',
      time: ''
    },
    '172': '',
    '173': {
      cap: '24:00',
      max: '216',
      reps: '',
      time: ''
    },
    '174': '',
    '175': {
      cap: '40:00',
      max: '440',
      reps: '',
      time: ''
    }
  }

  scoreFor (workout) {
    const input = this.inputs[workout]
    if (typeof input === 'string') {
      return input
    } else {
      if (input.reps === '' || input.reps === input.max) {
        return input.time
      } else {
        return input.reps
      }
    }
  }

  numberFor (workout) {
    const input = this.inputs[workout]
    if (typeof input === 'string') {
      if (input === '') {
        return 0
      } else {
        return parseFloat(input)
      }
    } else {
      if (input.time === '' && input.reps === '') {
        return 0
      } else {
        const time = input.time === '' ? input.cap : input.time
        const reps = input.reps === '' ? input.max : input.reps
        return parseInt(reps) / parseInt(time)
      }
    }
  }

  resultFor (workout) {
    const score = this.numberFor(workout)
    const data = results[workout]
    console.log(score, data)
    return data.find((result) => {
      return result.min <= score && result.max >= score
    })
  }
 }

const store = new Store()
export default store
