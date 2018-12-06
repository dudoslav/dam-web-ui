import React, { Component } from 'react'
import DownloadItem from './DownloadItem'

export default class DownloadList extends Component {
  constructor(props) {
    super(props)
    this.state = { downloads: [] }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    fetch('/downloads').then(r => r.json()).then(json => this.setState({ downloads: json }))
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
