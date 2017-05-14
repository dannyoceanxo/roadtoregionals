import React, { Component } from 'react'

class Error extends Component {
  render () {
    return <div>
      <div className='error'>
        <h1>Oh no, you broke the internet</h1>
        <h3>Click on Kyra's face to return to safety</h3>
        <div className='kyra'>
          <a href='http://cigarcitycrossfit.com'><img src='/images/kyra.PNG' /></a>
        </div>
      </div>
    </div>
  }
  }

  // return <div>
  //  <div className='error'>
  //    <h1>Oh no, you've upset Angry Brad</h1>
  //    <h3>Click on his abs to make him smile again</h3>
  //    <div className='angrybrad'>
  //      <a href='http://trainingthinktank.com'><img src='/images/angrybrad.PNG' height='500px' /></a>
  //    </div>
  //  </div>
//  </div>
// }
// }

export default Error
