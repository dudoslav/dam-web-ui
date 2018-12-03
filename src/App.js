import React, { Component } from 'react'
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
        <DownloadList/>
      </div>
    )
  }
}

class DownloadList extends Component {
  constructor(props) {
    super(props)
    this.state =
    { downloads:
      [{ name: 'test1', progress: 42 },
       { name: 'test2', progress: 0 },
       { name: 'test3', progress: 100 }] }
  }


  render() {
    const listItems = this.state.downloads.map((download, index) => <DownloadItem download={download} key={index}/> )
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

function DownloadItem(props) {
  return (
    <li>
      <details>
        <summary>
          <span>{props.download.name}</span>
          <button>&#x00d7;</button>
          <progress value={props.download.progress} max="100"></progress>
        </summary>
        <div>
          DETAILS
        </div>
      </details>
    </li>
  )
}

export default App
