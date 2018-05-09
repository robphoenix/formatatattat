import React, { Component } from "react"
import logo from "../logo.svg"
import "../App.css"
import InputArea from "./InputArea"
import OutputArea from "./OutputArea"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Formatter-tat-tat</h1>
        </header>
        <InputArea />
        <OutputArea />
      </div>
    )
  }
}

export default App
