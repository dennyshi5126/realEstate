import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Filter from './filter.js'
import Listings from './listings.js'

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
      <div><Header />
        <section>
          <Filter />
          <Listings />
        </section>
      </div>
    )
  }


}


const app = document.getElementById('app')

ReactDOM.render(<App />, app)
