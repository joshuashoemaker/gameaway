import { Component } from 'react'
import logo from '../media/gameControllerIcon.svg'
import './App.css'

import Search from './Search/Search'
import GiveAwayList from './GiveAways/GiveAwayList'

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>GameAway</h1>
        </header>

        <Search />
        <GiveAwayList />
      </div>
    )
  }
}

export default App
