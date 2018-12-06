import React, { Component } from 'react'

export default class DownloadForm extends Component {
  constructor(props) {
    super(props)
    this.state = { url: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ url: event.target.value })
  }

  handleSubmit(event) {
    fetch('/downloads', { method: 'POST', body: JSON.stringify({ uri: this.state.url }) })
    this.setState({ url: '' })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="https://" value={this.state.url} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
