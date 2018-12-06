import React, { Component } from 'react'
import DownloadForm from './DownloadForm'
import DownloadList from './DownloadList'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>DAM</h1>
          <img src={logo} width="100" height="100" alt="DAM logo"/>
        </header>
        <DownloadForm/>
        <DownloadList/>
      </div>
    )
  }
}

export default App
