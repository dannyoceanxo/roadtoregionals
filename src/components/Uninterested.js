import React, { Component } from 'react'

class Uninterested extends Component {
  render () {
    return <div className='main'>
      <div className='unintro'>
        <h1>So you don't want to make Regionals?</h1>
        <h2>Check out some of these links to other fitness resources</h2>
      </div>
      <div className='stuffilike'>
        <a href='http://noeql.com'><img src='images/noeql.png' height='150px' width='300px' /></a>
        <a href='http://minidoughnutfactory.com'><img src='images/minidonutfactory.png' /></a>
        <a href='http://cigarcitycrossfit.com'><img src='images/cigarcity.png' height='205px' width='215px' /></a>
        <a href='http://crossfit813.com'><img src='images/cf813.jpg' height='225px' width='215px' /></a>
      </div>
    </div>
  }
}

export default Uninterested
