import React, { Component } from 'react'
import DownloadItem from './DownloadItem'

export default class DownloadList extends Component {
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
