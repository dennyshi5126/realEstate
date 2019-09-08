import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowlevelclass: 'danger-bg'
    }

    //this.clickimg = this.clickimg.bind(this)
  }

  render () {
    return (
      <div><Header /></div>
    )
  }


}


const app = document.getElementById('app')

ReactDOM.render(<App />, app)
