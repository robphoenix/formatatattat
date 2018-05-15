import React, { Component } from "react"
import logo from "../logo.svg"
import "../App.css"
import InputArea from "./InputArea"
import OutputArea from "./OutputArea"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Paste your JSON here."
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Formatter-tat-tat</h1>
        </header>
        <InputArea value={this.state.value} handleChange={this.handleChange} />
        <OutputArea value={this.state.value} />
      </div>
    )
  }
}

export default App
